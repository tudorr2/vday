function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️"; // Emoji for heart

  // Randomize the position (left) and fall speed (animation duration)
  heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position across the viewport width
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed (between 2s to 5s)

  // Add the heart to the body of the document
  document.body.appendChild(heart);

  // Remove the heart after the animation ends (5 seconds)
  setTimeout(() => {
    heart.remove();
  }, 5000); // Matches the animation duration (5 seconds)
}

// Create hearts every 500ms (0.5 seconds)
setInterval(createHeart, 500);

let yes = document.querySelector(".yes");
let no = document.querySelector(".no");

yes.addEventListener("click", function () {
  window.location.href = "yess.html"; // Change URL as needed
});

let w = 90;
let h = 40;
let f = 20;

let i = 0;

function multiplyButtonSize() {
  console.log(i);
  w += 10;
  h += 10;
  f += 2;

  yes.style.width = `${w}px`;
  yes.style.height = `${h}px`;
  yes.style.fontSize = `${f}px`;

  if (i >= 7) {
    yes.style.width = "100vw";
    yes.style.height = "100vh";
    yes.style.fontSize = "5vw";
  }

  i++;
}

no.addEventListener("click", multiplyButtonSize);
