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
