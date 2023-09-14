const btnsPlayerContainer = document.querySelector(".player-btn-container");
const btnComputerContainer = document.querySelector(".computer-btn-container");
const playerBtns = document.querySelectorAll(".player-icon");
const computerBtns = document.querySelectorAll(".computer-icon");
const computerRock = document.querySelector(".computer-rock");
const computerPaper = document.querySelector(".computer-paper");
const computerScissors = document.querySelector(".computer-scissors");
const messageEl = document.querySelector(".message");
const playerMessageEl = document.querySelector(".player-message");
const computerMessageEl = document.querySelector(".computer-message");

let playerThrow = "";
let computerThrow = "";
let isPlaying = false;

// Functions
const computerUpdate = function (choice, choiceStr) {
  computerThrow = choiceStr;
  computerBtns.forEach((btn) => btn.classList.remove("computer-choice"));
  computerBtns.forEach((btn) => btn.classList.remove("fa-solid"));
  computerBtns.forEach((btn) => btn.classList.add("fa-regular"));
  choice.classList.add("computer-choice");
  choice.classList.remove("fa-regular");
  choice.classList.add("fa-solid");
  computerMessageEl.textContent = `Computer chooses ${choiceStr}`;
};

const computerChoice = function () {
  const random = Math.trunc(Math.random() * 3) + 1;

  if (random === 1) computerUpdate(computerRock, "rock");
  if (random === 2) computerUpdate(computerPaper, "paper");
  if (random === 3) computerUpdate(computerScissors, "scissors");
};

const playerChoice = function (choice, choiceStr) {
  playerThrow = choiceStr;
  playerBtns.forEach((btn) => btn.classList.remove("player-choice"));
  playerBtns.forEach((btn) => btn.classList.remove("fa-solid"));
  playerBtns.forEach((btn) => btn.classList.add("fa-regular"));
  choice.classList.add("player-choice");
  choice.classList.remove("fa-regular");
  choice.classList.add("fa-solid");
  playerMessageEl.textContent = `Player chooses ${choiceStr}`;
  computerChoice();
};

const computerWins = function () {
  messageEl.style.color = "#f199bf";
  messageEl.textContent = `Computer wins 🤖`;
};

const playerWins = function () {
  messageEl.style.color = "#8fb3ff";
  messageEl.textContent = `Player wins! 🎉`;
};

const draw = function () {
  messageEl.style.color = "#fff";
  messageEl.textContent = `Draw 🙂`;
};

const chooseWinner = function () {
  // Draw
  if (playerThrow === computerThrow) draw();

  // Player throws rock
  if (playerThrow === "rock" && computerThrow === "paper") computerWins();
  if (playerThrow === "rock" && computerThrow === "scissors") playerWins();

  // Player throws paper
  if (playerThrow === "paper" && computerThrow === "scissors") computerWins();
  if (playerThrow === "paper" && computerThrow === "rock") playerWins();

  // Player throws scissors
  if (playerThrow === "scissors" && computerThrow === "rock") computerWins();
  if (playerThrow === "scissors" && computerThrow === "paper") playerWins();
};

const init = function () {
  playerBtns.forEach((btn) => btn.classList.remove("player-choice"));
  computerBtns.forEach((btn) => btn.classList.remove("computer-choice"));
};
init();

// Event Listeners
btnsPlayerContainer.addEventListener("click", function (e) {
  const rock = e.target.closest(".fa-hand-back-fist");
  const paper = e.target.closest(".fa-hand");
  const scissor = e.target.closest(".fa-hand-scissors");

  if (rock) playerChoice(rock, "rock");
  if (paper) playerChoice(paper, "paper");
  if (scissor) playerChoice(scissor, "scissors");

  chooseWinner();
});
