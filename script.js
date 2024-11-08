document.addEventListener("DOMContentLoaded", () => {
  let current = 0;
  function next() {
    circles[current].classList.remove("carrousel__circle--active");
    current = (current + 1) % 3;
    carrousel.style.setProperty("--transform-value", current * -100 + "%");
    circles[current].classList.add("carrousel__circle--active");
  }

  function previous() {
    circles[current].classList.remove("carrousel__circle--active");
    current -= 1;
    if (current < 0) {
      current = 2;
    }
    carrousel.style.setProperty("--transform-value", current * -100 + "%");
    circles[current].classList.add("carrousel__circle--active");
  }
  const carrousel = document.querySelector(".carrousel");
  //carrousel.style.setProperty("--transform-value", "-50%");
  const circles = document.querySelector(".carrousel__nav").children;
  const leftBtn = carrousel.querySelector(".left");
  const rightBtn = carrousel.querySelector(".right");
  rightBtn.addEventListener("click", () => {
    next();
  });
  leftBtn.addEventListener("click", () => {
    previous();
  });
});
