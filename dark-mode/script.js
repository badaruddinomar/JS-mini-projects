// Selectors--
const darkModeBtns = document.querySelectorAll(".dark-mode-btn");
const body = document.querySelector("body");
const customMouse = document.querySelector(".custom-mouse");
const customMouseSm = document.querySelector(".custom-mouse-sm");
const burger = document.querySelector(".burger");
const menubar = document.querySelector(".menubar");

// Handlers--
darkModeBtns.forEach((darkModeBtn) => {
  darkModeBtn.addEventListener("click", (e) => {
    body.classList.toggle("white-mode");

    if (body.classList.contains("white-mode")) {
      darkModeBtn.innerHTML = `<span class="dark-mode-btn"> <i class="fa-regular fa-moon"></i> Dark</span>`;

      menubar.classList.add("menubar-bg-white");
      menubar.classList.remove("menubar-bg-dark");
    } else {
      darkModeBtn.innerHTML = `<span class="dark-mode-btn"> <i class="fa-solid fa-sun"></i>Light</span>`;
      menubar.classList.add("menubar-bg-dark");
      menubar.classList.remove("menubar-bg-white");
    }
  });
});

document.addEventListener("mousemove", (e) => {
  const left = e.clientX;
  const top = e.clientY;

  customMouse.style.top = top + "px";
  customMouse.style.left = left + "px";

  customMouseSm.style.top = top + "px";
  customMouseSm.style.left = left + "px";
});

burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menubar.classList.toggle("active");
});
