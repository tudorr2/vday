function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️"; // Heart emoji

  // Random position on screen
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed

  document.body.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);
