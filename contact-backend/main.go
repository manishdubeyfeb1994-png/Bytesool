package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"
	"strconv"

	"github.com/joho/godotenv"
	"gopkg.in/gomail.v2"
)

type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Phone   string `json:"phone"`
	Message string `json:"message"`
}

func main() {

	// load ENV
	err := godotenv.Load()

	if err != nil {
		log.Println("NO .ENV FOUND")
	}

	http.HandleFunc("/send-email", handleSendEmail)

	port := os.Getenv("SERVER_PORT")

	if port == "" {
		port = "8080"
	}

	fmt.Println("Server Started on Port : ", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))

}

func handleSendEmail(w http.ResponseWriter, r *http.Request) {

	enableCors(&w)

	// Handle preflight request
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var form ContactForm

	err := json.NewDecoder(r.Body).Decode(&form)

	if err != nil {
		http.Error(w, "Invalid Body Request", http.StatusBadRequest)
		return
	}

	// trim spaces

	form.Name = trim(form.Name)
	form.Email = trim(form.Email)
	form.Phone = trim(form.Phone)
	form.Message = trim(form.Message)

	// Validations

	if form.Name == "" || form.Email == "" || form.Phone == "" || form.Message == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	if !isValidEmail(form.Email) {
		http.Error(w, "Invalid email format", http.StatusBadRequest)
		return
	}

	if len(form.Phone) < 8 {
		http.Error(w, "Invalid phone number", http.StatusBadRequest)
		return
	}

	// Send Email
	err = sendEmail(form)
	if err != nil {
		log.Println("Email error:", err)
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"message": "Email sent successfully",
	})
}

func sendEmail(form ContactForm) error {

	host := os.Getenv("SMTP_HOST")
	portStr := os.Getenv("SMTP_PORT")
	user := os.Getenv("SMTP_USER")
	pass := os.Getenv("SMTP_PASS")

	port, _ := strconv.Atoi(portStr)

	m := gomail.NewMessage()
	m.SetHeader("From", user)
	m.SetHeader("To", user)
	m.SetHeader("Subject", "New Contact Form Submission")

	m.SetBody("text/html", fmt.Sprintf(`
		<h2>New Contact Message</h2>
		<p><strong>Name:</strong> %s</p>
		<p><strong>Email:</strong> %s</p>
		<p><strong>Phone:</strong> %s</p>
		<p><strong>Message:</strong><br/> %s</p>
	`, form.Name, form.Email, form.Phone, form.Message))

	d := gomail.NewDialer(host, port, user, pass)
	d.SSL = false

	return d.DialAndSend(m)
}

func enableCors(w *http.ResponseWriter) {
	origin := os.Getenv("ALLOWED_ORIGIN")
	if origin == "" {
		origin = "*"
	}
	fmt.Println("Orign : ", origin)

	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func trim(value string) string {
	return regexp.MustCompile(`^\s+|\s+$`).ReplaceAllString(value, "")
}

func isValidEmail(email string) bool {
	re := regexp.MustCompile(`^[a-zA-Z0-9._%%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	return re.MatchString(email)
}
