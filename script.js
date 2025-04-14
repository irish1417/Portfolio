document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
  
   
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("data-section");
        const section = document.getElementById(sectionId);
  
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
   
    window.addEventListener("scroll", function () {
      let current = "";
      const scrollY = window.scrollY;
  
      document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
  
       
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
     
      links.forEach(link => {
        link.classList.remove("nav-active");
        if (link.getAttribute("data-section") === current) {
          link.classList.add("nav-active");
        }
      });
    });
  
   
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", function () {
        const overlay = this.querySelector(".card-overlay");
        overlay.style.opacity = "1";
      });
  
      card.addEventListener("mouseleave", function () {
        const overlay = this.querySelector(".card-overlay");
        overlay.style.opacity = "0";
      });
    });
  });