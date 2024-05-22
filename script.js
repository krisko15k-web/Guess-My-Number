"use strict";

let secretNumber = Math.ceil(Math.random() * 20);
let scoreNumber = 20;
let score = document.querySelector(".score");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number!";
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      message.textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      message.textContent = "💥 You lost the game!";
      score.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.ceil(Math.random() * 20);
  scoreNumber = 20;
  score.textContent = scoreNumber;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
});
