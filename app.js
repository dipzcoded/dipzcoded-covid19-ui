const menuBtn = document.querySelector(".menu");
const cancelBtn = document.querySelector(".cancel-menu");
const mainNav = document.querySelector(".main-nav");
const navList = document.querySelector(".nav-list");
const listItems = document.querySelectorAll(".nav-items");
const toggleMenu = () => {
  navList.classList.toggle("show");

  listItems.forEach((el, index) => {
    if (!el.style.animation) {
      el.style.animation = `slideY 0.5s ease forwards ${index / 7 + 1}s `;
    } else {
      el.style.animation = "";
    }
    menuBtn.classList.toggle("notShowMenu");
    cancelBtn.classList.toggle("notShowMenu");
  });
};

const arrayBtn = [menuBtn, cancelBtn];
const windowEvent = ["scroll"];
arrayBtn.forEach((el) => el.addEventListener("click", toggleMenu));

listItems.forEach((el) => {
  el.addEventListener("click", () => {
    if (Number(window.innerWidth) < 860) {
      toggleMenu();
    }
  });
});

windowEvent.forEach((winEvt) => {
  window.addEventListener(winEvt, () => {
    mainNav.classList.toggle("sticky", window.scrollY > 0);
  });
});
