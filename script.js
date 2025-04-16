document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".ri-menu-3-line");
    const navLinks = document.querySelectorAll("nav a");
  
    menuIcon.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
      });
    });
  });
  