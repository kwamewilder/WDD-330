// Display message
// function doSomething() {
//   console.log("Something Happened!");
// }

// Display type of event
// function doSomething(event) {
//   console.log(event.type);
// }

// Display node clicked
// function doSomething(event) {
//   console.log(event.target);
// }

// Coordinates of an event
// function doSomething(event) {
//   console.log(
//     `screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`
//   );
// }

// addEventListener("click", doSomething);

// Display mouse click events up/down/click
const clickParagraph = document.getElementById("click");

clickParagraph.addEventListener("click", () => console.log("click"));
clickParagraph.addEventListener("mousedown", () => console.log("down"));
clickParagraph.addEventListener("mouseup", () => console.log("up"));

// Highlights box when it is double clicked
const dblclickParagraph = document.getElementById("dblclick");
dblclickParagraph.addEventListener("dblclick", highlight);

function highlight(event) {
  event.target.classList.toggle("highlight");
}

// Highlight box when mouse is over it
const mouseParagraph = document.getElementById("mouse");
mouseParagraph.addEventListener("mouseover", highlight);
mouseParagraph.addEventListener("mouseout", highlight);

// Display message when you move the mouse within the box while inside of the box
// mouseParagraph.addEventListener("mousemove", () => console.log("You Moved!"));

// Display psychedelic effect/highlight the screen
// addEventListener("keydown", highlight);

// Display the date/time a key was released/stopped being pressed
// addEventListener("keyup", (event) =>
//   console.log(`You stopped pressing the key on ${new Date()}`)
// );

// Display what key was pressed
// addEventListener("keypress", (event) =>
//   console.log(`You pressed the ${event.key} character`)
// );

// Display what key was clicked (includes modifier keys)
// addEventListener("keydown", (event) =>
//   console.log(`You pressed the ${event.key} character`)
// );

// Display message when Ctrl + c keys are clicked
// addEventListener("keydown", (event) => {
//   if (event.key === "c" && event.ctrlKey) {
//     console.log("Action canceled!");
//   }
// });

// Display message when shift key is held down while clicking on the screen
// addEventListener("click", (event) => {
//   if (event.shiftKey) {
//     console.log("A Shifty Click!");
//   }
// });

// Display message when user has stopped touching the screen
// addEventListener('touchend', () => console.log('Touch stopped'));

// Display message and Highlight box when clicked and removes event listener
const onceParagraph = document.getElementById("once");
onceParagraph.addEventListener("click", remove);

function remove(event) {
  console.log("Enjoy this while it lasts!");
  onceParagraph.style.backgroundColor = "pink";
  onceParagraph.removeEventListener("click", remove);
}

// Prevent default page redirection when pressing on the link
const brokenLink = document.getElementById("broken");

brokenLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Broken Link!");
});

// Demonstrate the Bubbling model. From child element up
// ulElement = document.getElementById("list");
// liElement = document.querySelector("#list li");

// ulElement.addEventListener("click", (event) => console.log("Clicked on ul"));

// liElement.addEventListener("click", (event) => console.log("Clicked on li"));

// Demonstrate the Capturing model. From parent element down
// ulElement = document.getElementById("list");
// liElement = document.querySelector("#list li");

// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

// Use both Bubbling and Capturing models
// ulElement = document.getElementById("list");
// liElement = document.querySelector("#list li");

// capturing
// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),true);

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),true);

// bubbling
// ulElement.addEventListener('click', (event) =>
// console.log('Clicked on ul'),false );

// liElement.addEventListener('click', (event) =>
// console.log('Clicked on li'),false );

// Highlight the list item clicked on
ulElement = document.getElementById("list");

ulElement.addEventListener("click", highlight);