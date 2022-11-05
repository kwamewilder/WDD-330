// Semitransparent blue rectangle
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

// Pattern from image
function drawPattern() {
  var canvas = document.getElementById("demo2");
  var context = canvas.getContext("2d");
  context.strokeStyle = "red";

  var img = new Image();
  img.src = "images/bg-bike.png";
  img.onload = function () {
    var pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
  };
}
drawPattern();

// Linear gradient
function drawGradient() {
  var canvas = document.getElementById("demo3");
  var context = canvas.getContext("2d");
  context.strokeStyle = "red";
  var gradient = context.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(1, "white");
  context.fillStyle = gradient;
  context.fillRect(10, 10, 100, 100);
  context.strokeRect(10, 10, 100, 100);
}
drawGradient();

// Circle
var canvas2 = document.getElementById("demo4");
function drawCircle(canvas) {
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.strokeStyle = "red";
  context.fillStyle = "blue";
  context.lineWidth = 3;
  context.fill();
  context.stroke();
}
drawCircle(canvas2);

// Create URL with image in it
function saveDrawing() {
  var canvas = document.getElementById("demo4");
  window.open(canvas.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

// Draw canvas image
function drawImageToCanvas() {
  var canvas = document.getElementById("demo5");
  var context = canvas.getContext("2d");
  var image = document.getElementById("myImageElem");
  context.drawImage(image, 68, 68);
  // Examine small section of pixels
  var imageData = context.getImageData(0, 0, 1, 1);
  var pixelData = imageData.data;
  console.log(pixelData.length);
}
window.addEventListener("load", drawImageToCanvas, false);