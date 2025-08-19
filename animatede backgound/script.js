let body = document.body;
const cursor = document.querySelector('.cursor');
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
// let h1 = document.querySelector("h1");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let hue = 0;
const step = 3;
const maxHue = 360;

const stars = [];
const starCount = 200;



function updateColor(forward = true) {
    hue += forward ? step : -step;

    if (hue > maxHue) hue = 0;
    if (hue < 0) hue = maxHue;

    // Subtle, calm colors using low saturation and higher lightness
    const saturation = 85; // % soft color
    const lightness = 80;  // % bright but gentle
    const secondHue = (hue + 40) % 360;

    body.style.background = `linear-gradient(to bottom right, hsl(${hue}, ${saturation}%, ${lightness}%), hsl(${secondHue}, ${saturation}%, ${lightness}%))`;

    // Slightly darker complementary color for text
    //   h1.style.color = `hsl(${(hue + 180) % 360}, ${saturation}%, 35%)`;
}

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 1,
    alpha: Math.random() * 0.5 + 0.8
  });
}

window.addEventListener("mousemove", (e) => {
    const isScrollingDown = e.movementY > 0;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    updateColor(isScrollingDown);
});
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

function drawStars() {
  ctx.clearRect(0, 0, width, height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();

    // Move star
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = Math.random() * width;
    }
  }
  requestAnimationFrame(drawStars);
}

drawStars();