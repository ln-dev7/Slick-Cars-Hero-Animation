import "./style.scss";
import gsap from "gsap";

// background: radial-gradient(94.62% 89.4% at 56.35% 71.24%, #B22DE8 0%, #470064 100%);
// background: radial-gradient(94.62% 89.4% at 56.35% 71.24%, #F9DC2C 0%, #A97A00 100%);
// background: radial-gradient(94.62% 89.4% at 56.35% 71.24%, #474747 0%, #0F0F0F 100%);
// background: radial-gradient(91.93% 86.28% at 56.35% 71.24%, #D14438 0%, #370100 100%);
// background: radial-gradient(91.93% 86.28% at 56.35% 71.24%, #A1EE61 0%, #015600 100%);

const ease = "elastic.out(1,0.85)";
const duration = 1.5;

const main = document.querySelector(".main");

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const titles = document.querySelectorAll(".title");
const images = document.querySelectorAll(".image");

let current = 0;

arrowLeft.addEventListener("click", () => {
  current--;
  if (current < 0) current = titles.length - 1;
  update();
});

arrowRight.addEventListener("click", () => {
  current++;
  if (current > titles.length - 1) current = 0;
  update();
});

function update() {
  switch (current) {
    case 0:
      main.style.background =
        "radial-gradient(94.62% 89.4% at 56.35% 71.24%, #B22DE8 0%, #470064 100%)";
      break;
    case 1:
      main.style.background =
        "radial-gradient(94.62% 89.4% at 56.35% 71.24%, #F9DC2C 0%, #A97A00 100%)";
      break;
    case 2:
      main.style.background =
        "radial-gradient(94.62% 89.4% at 56.35% 71.24%, #474747 0%, #0F0F0F 100%)";
      break;
    case 3:
      main.style.background =
        "radial-gradient(91.93% 86.28% at 56.35% 71.24%, #D14438 0%, #370100 100%)";
      break;
    case 4:
      main.style.background =
        "radial-gradient(91.93% 86.28% at 56.35% 71.24%, #A1EE61 0%, #015600 100%)";
      break;
  }

  titles.forEach((title, index) => {
      gsap.to(title, {
        duration: duration,
        ease: ease,
        y: `${current * -100}px`
      });
  });

  images.forEach((image, index) => {
    if (index === current) {
      gsap.to(image, {
        duration: duration,
        ease: ease,
        scale: 1,
        opacity: 1,
      });
    } else {
      gsap.to(image, {
        duration: duration,
        ease: ease,
        scale: 0,
        opacity: 0,
      });
    }
  });
}
