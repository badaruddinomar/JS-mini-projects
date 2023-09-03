const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector(".add-btn");
const circleIcon = document.querySelector(".circle-icon");

const addTask = (e) => {
  if (e.code === "Enter" || e.type === "click") {
    const markUp = `
                  <li>
                      <i class="circle-icon fa-regular fa-circle"></i>
                      <span class="text">${inputBox.value}</span>
                      <i class="cross-icon fa-solid fa-xmark"></i>
                  </li>
                `;
    if (inputBox.value === "") return;
    listContainer.insertAdjacentHTML("afterbegin", markUp);
    saveData();
    inputBox.value = "";
  }
};
addBtn.addEventListener("click", addTask);
inputBox.addEventListener("keyup", addTask);

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("checked");
    e.target.parentElement.childNodes[1].classList.replace(
      "fa-circle",
      "fa-circle-check"
    );
    saveData();
  }
  if (!e.target.classList.contains("checked")) {
    e.target.parentElement.childNodes[1].classList.replace(
      "fa-circle-check",
      "fa-circle"
    );
    saveData();
  }
  if (e.target.classList.contains("cross-icon")) {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};
const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTask();
