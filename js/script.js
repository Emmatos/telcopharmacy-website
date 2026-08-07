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

    const formData = {

        fullname: document.getElementById("fullname").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        service: document.getElementById("service").value,

        message: document.getElementById("message").value

    };

    emailjs.send(

    APP_CONFIG.EMAILJS.SERVICE_ID,

    APP_CONFIG.EMAILJS.TEMPLATE_ID,

    formData

)

    .then(function(){

        const successMessage = document.getElementById("successMessage");

        successMessage.style.display = "block";

        appointmentForm.reset();

    })

    .catch(function(error){

        alert("Email could not be sent.");

        console.log(error);

    });

});;

}
