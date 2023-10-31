// Selectors--
const counters = document.querySelectorAll(".counter");

// Handlers--
counters.forEach((counter) => {
  const endvalue = counter.dataset.count;
  let count = 0;

  const interval = setInterval(() => {
    count++;
    counter.innerHTML = count;

    if (count == endvalue) {
      clearInterval(interval);
    }
  }, 1000 / endvalue);
});
