const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

const bakground = document.querySelector(".bg");
const text = document.querySelector(".loading-text ");

btn.addEventListener("click", (e) => {
  search.classList.toggle("active");
  input.classList.toggle('active');
  input.focus();
});

// let load = 0;
// let int = setInterval(blurring, 30);

// function blurring() {
//   load++;
//   if (load === 100) {
//     clearInterval(int);
//   }
//   text.innerText = `${load}%`;
//   text.style.opacity = scale(load, 0, 100, 1, 0);

//   bakground.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
