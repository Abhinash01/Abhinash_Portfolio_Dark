const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),
  smooth: true
});



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".ri-menu-3-line");
    const navLinks = document.querySelectorAll("nav a, .mobile-nav a");
  
    menuIcon.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
      });
    });
  });
  