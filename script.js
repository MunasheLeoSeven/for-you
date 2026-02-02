const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noClicks = 0;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  noClicks++;

  const texts = [
    "Wait… what? 😢",
    "Think again 🥺",
    "That hurts… 💔",
    "I made this just for you 😭",
    "Okay now you're just being mean 😤",
    "You literally can't escape 😈",
  ];

  message.textContent = texts[Math.min(noClicks, texts.length - 1)];
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
