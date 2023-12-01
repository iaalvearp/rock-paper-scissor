const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissor = document.getElementById("user-scissor");
const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("pc-choice");

const setPicture = (source) => {
  userChoice.attributes["src"].textContent = `assets/pic-${source}.png`;
};
const randomPc = () => {
  let random = parseInt(Math.random() * 3);
  if (random === 0) {
    pcChoice.attributes["src"].textContent = "assets/pic-pc-rock.png";
  } else if (random === 1) {
    pcChoice.attributes["src"].textContent = "assets/pic-pc-paper.png";
  } else if (random === 2) {
    pcChoice.attributes["src"].textContent = "assets/pic-pc-scissor.png";
  }
};

userRock.addEventListener("click", () => {
  setPicture(userRock.id);
  randomPc();
});
userPaper.addEventListener("click", () => {
  setPicture(userPaper.id);
  randomPc();
});
userScissor.addEventListener("click", () => {
  setPicture(userScissor.id);
  randomPc();
});
