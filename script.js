const music = document.getElementById("bg-music");

// Autoplay setelah user klik (biar tidak diblokir browser)
document.addEventListener(
  "click",
  function () {
    music.play();
  },
  { once: true }
);

const buttonsContainer = document.querySelector(".buttons");
const numberContainer = document.querySelector(".numbers");
const yesButton = document.querySelector(".btn-yes");
const noButton = document.querySelector(".btn-no");
const catImg = document.querySelector(".cat-img");
const title = document.querySelector(".title");
const question = document.querySelector(".question");

const MAX_IMAGES = 5;
let count = 0;

const listGambar = [
  "https://media1.tenor.com/m/BbSkyx3DaEgAAAAd/goma-sad.gif",
  "https://media.tenor.com/M9WbqMQ2ISwAAAAi/annoyed.gif",
  "https://i.pinimg.com/originals/96/43/2e/96432e7570c1d014a84085379ba369d7.gif",
  "https://i.pinimg.com/originals/e1/64/7b/e1647b7fd330918520b12076a8a2dfcd.gif",
  "https://media1.tenor.com/m/M_5Qg9ok3HQAAAAC/cat-pout.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW9temgzcjlieHJtOXM2YXhoeW94N2k2c3ljcmtpYTZ4NnBicm0ybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f9EmXxglhdhAj1bo28/giphy.webp",
];

const questionTexts = [
  "Masih marah kah? 🥺",
  "Jangan marah dong 😢",
  "Aku sedih loh... 😿",
  "Coba pikir lagi deh 💔",
  "Klik Iya aja dong 😭💕",
];

yesButton.addEventListener("click", function () {
  buttonsContainer.classList.add("hidden");
  title.innerHTML = "YEEAAYYY 💕";
  question.innerHTML = "Sekarang kita udah baikann 😍💖";
  numberContainer.classList.remove("hidden");
  catImg.src = listGambar[5];
});

noButton.addEventListener("click", function () {
  count++;

  if (count <= MAX_IMAGES) {
    catImg.src = listGambar[count - 1];
  }

  question.innerHTML =
    questionTexts[Math.min(count - 1, questionTexts.length - 1)];

  const randomX = Math.floor(Math.random() * 250) - 125;
  const randomY = Math.floor(Math.random() * 250) - 125;

  noButton.style.position = "absolute";
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

  const messages = [
    "Yakin? 🥺",
    "Gaboleh 😝",
    "Hehehe 😆",
    "Klik Iya dong 💘",
    "Aku ikan 🐟",
  ];

  noButton.innerHTML =
    messages[Math.min(count - 1, messages.length - 1)];
});
