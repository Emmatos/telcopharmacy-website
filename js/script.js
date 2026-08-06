const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menu.innerHTML = "✕";

    }else{

        menu.innerHTML = "☰";

    }

});

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menu.innerHTML = "☰";

    });

});

/* ===========================
   Appointment Form
=========================== */

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Collect form values
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Create WhatsApp message
    const whatsappMessage =
`*New Appointment Request*

👤 Name: ${fullName}

📧 Email: ${email}

📞 Phone: ${phone}

🩺 Service: ${service}

💬 Message:
${message}`;

    // Your WhatsApp number (Nigeria)
    const whatsappURL =
`https://wa.me/2347051621000?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show success message
    const successMessage = document.getElementById("successMessage");

    successMessage.style.display = "block";

    // Reset form
    appointmentForm.reset();

});

}
