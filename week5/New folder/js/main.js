const ul = document.querySelector("ul");

function displayList(item) {
  // Create doc elements
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");

  // Populate element info
  h2.textContent = item["name"];
  img.setAttribute("src", `images/${item["imgSrc"]}`);
  img.setAttribute("alt", item["imgAlt"]);
  img.setAttribute("width", "200px");
  p1.textContent = item["distance"];
  p2.textContent = item["difficulty"];
  p3.textContent = item["description"];
  p4.textContent = item["directions"];

  // Display elements
  ul.appendChild(li);
  li.appendChild(h2);
  li.appendChild(div);
  div.appendChild(picture);
  picture.appendChild(img);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
}

hikeList.forEach((item) => {
  displayList(item);
});
