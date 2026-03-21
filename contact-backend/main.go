package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"

	"github.com/joho/godotenv"
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

	port := os.Getenv("PORT")
	if port == "" {
		port = os.Getenv("SERVER_PORT")
	}
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

    apiKey := os.Getenv("RESEND_API_KEY")

    url := "https://api.resend.com/emails"

    body := fmt.Sprintf(`{
        "from": "Bytesool <onboarding@resend.dev>",
        "to": ["info@bytesool.com"],
        "subject": "New Contact Message",
        "html": "<h2>New Contact</h2>
        <p><b>Name:</b> %s</p>
        <p><b>Email:</b> %s</p>
        <p><b>Phone:</b> %s</p>
        <p><b>Message:</b> %s</p>"
    }`, form.Name, form.Email, form.Phone, form.Message)

    req, _ := http.NewRequest("POST", url, bytes.NewBuffer([]byte(body)))

    req.Header.Set("Authorization", "Bearer "+apiKey)
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)

    if err != nil {
        return err
    }

    defer resp.Body.Close()

    if resp.StatusCode != 200 && resp.StatusCode != 202 {
        return fmt.Errorf("failed to send email")
    }

    return nil
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
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
