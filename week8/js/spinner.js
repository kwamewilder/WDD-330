const spinBtn = document.getElementById("spinBtn");

// Create spin animation using the Raphael library
function spin() {
  let container = document.getElementById("spinner");
  if (container.children[0]) {
    container.children[0].remove();
  }
  // Create Raphael container
  container = Raphael(container, 125, 125);
  // Set starting coordiantes
  let spinner = container.image("images/spinner.svg", 0, 0, 125, 125);
  // Rotating 720 degrees
  let attrsToAnimate = { transform: "r720" };
  spinner.animate(attrsToAnimate, 10000);
}

spinBtn.addEventListener("click", () => {
  spin();
});
