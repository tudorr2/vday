function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

let yes = document.querySelector(".yes");
let no = document.querySelector(".no");

yes.addEventListener("click", function () {
  window.location.href = "yess.html"; // Change URL as needed
});

let w = 90;
let h = 40;
let f = 20;

let i;

function multiplyButtonSize() {
  // Multiply each dimension by 'i'
  w += 10;
  h += 10;
  f += 2;

  // Set the new size to the button

  yes.style.width = `${w}px`;
  yes.style.height = `${h}px`;
  yes.style.fontSize = `${f}px`;

  if (i == 10) {
    yes.style.width = "100vw";
    yes.style.height = "100vh";
    yes.style.fontSize = `5vw`;
  }

  console.log(i);
  i++;
}

no.addEventListener("click", multiplyButtonSize);
