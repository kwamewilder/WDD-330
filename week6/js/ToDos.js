const display = document.querySelector("tbody");

function addTask(task) {
  // Create page elements
  const tr = document.createElement("tr");
  const box = document.createElement("input");
  const td = document.createElement("td");
  const td2 = document.createElement("td");

  // Add element attributes
  tr.setAttribute("id", "task");
  box.setAttribute("type", "checkbox");
  box.setAttribute("id", `${task["id"]}`);
  td.textContent = task["content"];
  td2.textContent = "X";

  // Update document
  display.appendChild(tr);
  tr.appendChild(box);
  tr.appendChild(td);
  tr.appendChild(td2);
}
