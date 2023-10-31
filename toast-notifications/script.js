// Selectors--
const toastNoti = document.querySelector(".toast");
const successBtn = document.querySelector(".success-btn");
const errorBtn = document.querySelector(".error-btn");
const warningBtn = document.querySelector(".warning-btn");

// Handlers--
successBtn.addEventListener("click", (e) => {
  toastNoti.classList.add("success");
  toastNoti.innerHTML = "Successfully logged in";

  setTimeout(() => {
    toastNoti.classList.remove("success");
  }, 1500);
});
errorBtn.addEventListener("click", (e) => {
  toastNoti.classList.add("error");
  toastNoti.innerHTML = "Something went wrong";

  setTimeout(() => {
    toastNoti.classList.remove("error");
  }, 1500);
});
warningBtn.addEventListener("click", (e) => {
  toastNoti.classList.add("warning");
  toastNoti.innerHTML = "It's a warning";

  setTimeout(() => {
    toastNoti.classList.remove("warning");
  }, 1500);
});
