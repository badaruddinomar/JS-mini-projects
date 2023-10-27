// Selectors--

const sliderContainer = document.querySelector(".slides");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");

// Handlers--
sliderContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  sliderContainer.scrollLeft += e.deltaY;
});
nextBtn.addEventListener("click", (e) => {
  sliderContainer.scrollLeft += 900;
});
prevBtn.addEventListener("click", (e) => {
  sliderContainer.scrollLeft -= 900;
});
console.log(sliderContainer);
