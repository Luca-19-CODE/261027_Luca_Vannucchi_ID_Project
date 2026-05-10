document.getElementById("ContactForm").addEventListener("submit", function(e) {
    e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();

const messageBox = document.getElementById("formMessage");

if (name === "" || email === "" || message === "") {
        messageBox.innerHTML = `<p style="color: red; margin-top: 15px;">Please fill in all required fields!</p>`;
        return;
    }

if (!email.includes("@") || !email.includes(".")) {
        messageBox.innerHTML = `<p style="color: red; margin-top: 15px;">Please enter a valid email address!</p>`;
        return;
    }

messageBox.innerHTML = `
        <p style="color: green; background: #d4edda; padding: 15px; border-radius: 10px; margin-top: 15px;">
            ✅ Thank you, <strong>${name}</strong>! Your message has been sent successfully.
        </p>
    `;

document.getElementById("contactForm").reset();

setTimeout(() => {
        messageBox.innerHTML = "";
    }, 5000);
});
