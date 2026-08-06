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

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("✅ Thank you! Your appointment request has been received. We will contact you shortly.");

        appointmentForm.reset();

    });

}
