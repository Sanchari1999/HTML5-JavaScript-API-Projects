const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let balls = [];

class Ball {
  constructor(x, y, r, color, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

function init() {
  for (let i = 0; i < 10; i++) {
    let r = Math.random() * 50 + 10;
    let x = Math.random() * (canvas.width - 2 * r) + r;
    let y = Math.random() * (canvas.height - 2 * r) + r;
    let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    let dx = Math.random() * 5 - 2.5;
    let dy = Math.random() * 5 - 2.5;
    let ball = new Ball(x, y, r, color, dx, dy);
    balls.push(ball);
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }
}

init();
animate();
