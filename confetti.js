const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 300;
const confetti = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: random(0, canvas.width),
      y: random(-canvas.height, 0),
      r: random(5, 15),
      d: random(1, 5),
      color: `hsl(${random(0, 360)}, 100%, 50%)`,
      tilt: random(-10, 10),
      tiltAngleIncremental: random(0.05, 0.1),
      tiltAngle: 0
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r / 2;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += c.d;
    c.tiltAngle += c.tiltAngleIncremental;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > canvas.height) {
      c.x = random(0, canvas.width);
      c.y = -20;
    }
  });
}

let confettiAnimation;

function startConfetti() {
  if (!confetti.length) createConfetti();
  confettiAnimation = setInterval(drawConfetti, 16);
}

function stopConfetti() {
  clearInterval(confettiAnimation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
