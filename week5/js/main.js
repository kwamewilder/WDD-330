const ul = document.querySelector("ul");

function displayList(item) {
  // Create doc elements
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");
  const p7 = document.createElement("p");
  const p8 = document.createElement("p");

  // Populate element info
  h2.textContent = item["name"];
  img.setAttribute("src", `images/${item["imgSrc"]}`);
  img.setAttribute("alt", item["imgAlt"]);
  p1.textContent = "Distance";
  p2.textContent = item["distance"];
  p3.textContent = "Difficulty";
  p4.textContent = item["difficulty"];
  p5.textContent = "Description";
  p6.textContent = item["description"];
  p7.textContent = "Directions";
  p8.textContent = item["directions"];

  // Display elements
  ul.appendChild(li);
  li.appendChild(h2);
  li.appendChild(div1);
  div1.appendChild(picture);
  picture.appendChild(img);
  li.appendChild(div2);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);
  div2.appendChild(p7);
  div2.appendChild(p8);
}

hikeList.forEach((item) => {
  displayList(item);
});
