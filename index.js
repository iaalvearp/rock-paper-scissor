const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissor = document.getElementById("user-scissor");
const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("pc-choice");
const resultPic = document.getElementById("modal-result-pic");
const resultText = document.getElementById("modal-result-text");
const modal = document.getElementById("modalBg");

const showModal = () => {
  if (modal.style.scale == 0) {
    setTimeout(() => {
      modal.style.scale = 1;
    }, 500);
  } else {
    setTimeout(() => {
      modal.style.scale = 0;
    }, 500);
  }
};

const setPicture = (source) => {
  userChoice.attributes["src"].textContent = `assets/pic-${source}.png`;
  return source;
};

const randomPc = () => {
  let random = parseInt(Math.random() * 3);
  if (random === 0) {
    pcChoice.attributes["src"].textContent = "assets/pic-pc-rock.png";
    return "rock";
  } else if (random === 1) {
    pcChoice.attributes["src"].textContent = "assets/pic-pc-paper.png";
    return "paper";
  } else if (random === 2) {
    pcChoice.attributes["src"].textContent = "assets/pic-pc-scissor.png";
    return "scissor";
  }
};

const rockModal = (pc) => {
  if (pc === "rock") {
    resultPic.textContent = `😬`;
    resultText.textContent = `Empate`;
  } else if (pc === "paper") {
    resultPic.textContent = `😢`;
    resultText.textContent = `Perdiste`;
  } else if (pc === "scissor") {
    resultPic.textContent = `😁`;
    resultText.textContent = `Ganaste!!!`;
  }
};

const paperModal = (pc) => {
  if (pc === "paper") {
    resultPic.textContent = `😬`;
    resultText.textContent = `Empate`;
  } else if (pc === "scissor") {
    resultPic.textContent = `😢`;
    resultText.textContent = `Perdiste`;
  } else if (pc === "rock") {
    resultPic.textContent = `😁`;
    resultText.textContent = `Ganaste!!!`;
  }
};

const scissorModal = (pc) => {
  if (pc === "scissor") {
    resultPic.textContent = `😬`;
    resultText.textContent = `Empate`;
  } else if (pc === "rock") {
    resultPic.textContent = `😢`;
    resultText.textContent = `Perdiste`;
  } else if (pc === "paper") {
    resultPic.textContent = `😁`;
    resultText.textContent = `Ganaste!!!`;
  }
};

userRock.addEventListener("click", () => {
  showModal();
  setPicture(userRock.id);
  rockModal(randomPc());
});
userPaper.addEventListener("click", () => {
  showModal();
  setPicture(userPaper.id);
  paperModal(randomPc());
});
userScissor.addEventListener("click", () => {
  showModal();
  setPicture(userScissor.id);
  scissorModal(randomPc());
});

modal.addEventListener("click", showModal);
