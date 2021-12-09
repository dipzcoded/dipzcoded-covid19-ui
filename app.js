const menuBtn = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const toggleMenu = () => {
  navList.classList.toggle("show");
};

menuBtn.addEventListener("click", toggleMenu);
