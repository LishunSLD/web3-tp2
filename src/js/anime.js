import { animate, utils } from "animejs";

const balleContainer = document.querySelector(".balle");
const progressElement = document.querySelector(".progressa");
const chart1 = document.querySelector(".w");

animate('.titleover', {
  scale: ["98%", "100%", "98%"],
  opacity: ["25%", "100%", "25%"],
  duration: 1000 * 2,
  ease: "linear",
  loop: true
});

animate('.bi-radar', {
  scale: ["1000%"],
  opacity: ["0%", "100%", "0%"],
  duration: 1000 * 2,
  ease: "linear",
  loop: 5
});

function progressBar() {
  let progress = Array(10).fill('▒');
  progressElement.textContent = `${progress.join('')}`;

  for (const [i, c] of progress.entries()) {
    setTimeout(() => {
      console.log("rewt");

      progress[i] = '█';
      progressElement.textContent = `${progress.join('')}`;

      if (i == progress.length - 1) setTimeout(() => progressBar(), 2000);

    }, (i + 1) * 1000);
  }
}

progressBar()

utils.set('.progressa', {
  scale: ["250%"]
});

animate('.titleover50', {
  opacity: ["75%", "100%", "75%"],
  duration: 1000 * 4,
  ease: "linear",
  loop: true
});

// animate('table', {
//   scale: ["110%", "125%", "110%"],
//   duration: 1000 * 5,
//   ease: "linear",
//   loop: true
// });

animate('#chart3', {
  rotate: 360,
  duration: 1000 * 4,
  ease: "linear",
  loop: true
});

utils.set('.bi-ban', {
  y: -40
});

animate('.bi-ban', {
  rotate: 360,
  scale: [5, 7, 5],
  duration: 1000 * 4,
  ease: "linear",
  loop: true
});

animate('.bi-bookmark-check-fill', {
  y: [0, -15, 0],
  duration: 1000 * 2,
  ease: "linear",
  loop: true
});

for (let i = 0; i < 40; i++) {
  const a = document.createElement("DIV");
  a.classList.add("balles");
  balleContainer.appendChild(a);

  animate(a, {
    x: [() => utils.random(-65, 65) + "cqw"],
    y: [() => utils.random(-50, 50) + "cqh"],
    opacity: [() => utils.random(0, 1, 0)],
    scale: [() => utils.random(1, 15)],
    duration: () => utils.random(1, 1500),
    ease: "linear",
    loop: true,
    onLoop: (self) => self.restart().refresh()
  });
}

balleContainer.addEventListener('click', () => {
  const balls = balleContainer.querySelectorAll(".balles");
  balleContainer.style.filter = "none";
  balleContainer.classList.remove("border-success");
  balleContainer.classList.add("border-danger");

  balls.forEach(ball => {
    ball.style.filter = "none";
    ball.classList.add("bg-danger");

    animate(ball, {
      x: [() => utils.random(-1200, 1200) + "cqw"],
      y: [() => utils.random(-900, 900) + "cqh"],
      opacity: [() => utils.random(0.3, 1, 0)],
      scale: [() => utils.random(5, 60)],
      duration: () => utils.random(500, 2000),
      ease: "linear",
      loop: true,
      onLoop: (self) => self.restart().refresh()
    });
  });
});


for (let i = 0; i < 26; i++) {
  const a = document.createElement("DIV");
  a.classList.add("balles");
  chart1.appendChild(a);

  utils.set(a, {
    x: [() => utils.random(0, 10) + "cqw"],
    y: [() => utils.random(-19, -3) + "cqh"],
  });

  animate(a, {
    opacity: [() => utils.random(0, 1, 0)],
    scale: [() => utils.random(1, 15)],
    duration: () => utils.random(1500, 4500),
    ease: "linear",
    loop: true,
    onLoop: (self) => self.restart().refresh()
  });
}