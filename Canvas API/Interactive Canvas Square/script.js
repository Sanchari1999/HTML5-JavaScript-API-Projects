// Code for drawing a red square on the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(50, 50, 50, 50);

// Code for adding interactivity to the canvas
var x = 50;
var y = 50;

canvas.addEventListener("click", function(event) {
  x = event.clientX - canvas.offsetLeft;
  y = event.clientY - canvas.offsetTop;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(x, y, 50, 50);
  requestAnimationFrame(draw);
}

draw();
