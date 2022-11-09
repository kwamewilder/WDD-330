// URL to connect to the websockets secure protocol.
// The site is the Echo server hosted at websocket.org

// const URL = "wss://echo.websocket.org/"; No longer available
const URL = "wss://ws.postman-echo.com/raw"; // Replacement
const outputDiv = document.getElementById("output");
const form = document.forms[0];
// Refernce to the websocket object.
const connection = new WebSocket(URL);

// Create a new p element inside of the div with a
// message
function output(message) {
  const p = document.createElement("p");
  p.innerHTML = message;
  outputDiv.appendChild(p);
}

// send message to the Echo server
function message(event) {
  event.preventDefault();
  const text = form.message.value;
  output(`SENT: ${text}`);
  connection.send(text);
}

// When the websocket object has successfully opened
// the URL, it will initiate the open event
connection.addEventListener(
  "open",
  () => {
    output("CONNECTED");
  },
  false
);

// Add messages
form.addEventListener("submit", message, false);

// Wait for the Echo server to respond and display
// the responce message
connection.addEventListener(
  "message",
  (event) => {
    output(`RESPONSE: ${event.data}`);
  },
  false
);

// Display disconnected message when the connection
// has been disconnected
connection.addEventListener(
  "close",
  () => {
    output("DISCONNECTED");
  },
  false
);

// Display an error message when the server returns
// an error message
connection.addEventListener(
  "error",
  (event) => {
    output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
  },
  false
);