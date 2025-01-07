function scrollToSection() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
}


// JavaScript to toggle the nav menu on mobile screens
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});