// Navigation eme bar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".btn i.fa-bars").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document.querySelectorAll(".menu a").forEach((link) => 
  link.addEventListener("click", toggleMenu)
);

// // preview image //

const windowObject = window;
windowObject.addEventListener("scroll", function(){
  const scrollY = windowObject.scrollY;
  const horizontaScrollElement = document.getElementById("testimonyPreview");
  const horizontaScrollElement2 = document.getElementById("project_preview");

   horizontaScrollElement.scrollLeft = scrollY * 0.2;
   horizontaScrollElement2.scrollLeft = scrollY * 0.2;

});


