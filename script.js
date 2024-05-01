const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");

yesButton.addEventListener("click", () => {
  window.location.href = "reasons.html";
});

noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
