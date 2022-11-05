const parentUl = document.getElementById("mainDisplay");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const paginationUl = document.getElementById("paginationBtns");
const parentTable = document.getElementById("detailView");
let pageNum = 1;
let maxPages = 0;

function getPage(num) {
  fetch(`https://swapi.dev/api/people/?page=${num}`)
    .then((response) => response.json())
    .then((data) => {
      pageNum = num;
      maxPages = Math.round(data.count / data.results.length, 0);
      populatePagination();
      hideBtn(maxPages);
      populateDisplay(data);
    });
}

function populateDisplay(data) {
  parentUl.replaceChildren();
  for (let person of data.results) {
    let newLi = document.createElement("li");
    newLi.innerText = `${person.name}`;
    newLi.addEventListener("click", () => {
      renderDetailView(person);
    });
    parentUl.append(newLi);
  }
}

function renderDetailView(person) {
  if (parentTable.children[1]) {
    parentTable.removeChild(parentTable.children[1]);
  }

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  td1.innerText = `${person.name}`;
  td2.innerText = `${person.birth_year}`;
  td3.innerText = `${person.eye_color}`;
  td4.innerText = `${person.height}`;
  td5.innerText = `${person.mass}`;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  parentTable.appendChild(tr);

  if (parentTable.classList.contains("hidden")) {
    parentTable.classList.toggle("hidden");
  }
}

function populatePagination() {
  paginationUl.replaceChildren();
  for (let i = 1; i < maxPages + 1; i++) {
    let newLi = document.createElement("li");
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `${i}`;
    if (i == pageNum) {
      newBtn.classList.add("active");
    }
    newBtn.classList.add("paginationPages");
    newBtn.addEventListener("click", () => {
      getPage(i);
    });
    newLi.appendChild(newBtn);
    newLi.classList.toggle("paginationBtn");
    paginationUl.appendChild(newLi);
  }
}

function hideBtn() {
  if (pageNum === 1 && !previousBtn.classList.contains("hidden")) {
    previousBtn.classList.toggle("hidden");
  } else if (pageNum != 1 && previousBtn.classList.contains("hidden")) {
    previousBtn.classList.toggle("hidden");
  }

  if (pageNum === maxPages && !nextBtn.classList.contains("hidden")) {
    nextBtn.classList.toggle("hidden");
  } else if (pageNum != maxPages && nextBtn.classList.contains("hidden")) {
    nextBtn.classList.toggle("hidden");
  }
}

function update(type) {
  if (pageNum != 1 && type === "previous") {
    pageNum -= 1;
  } else if (pageNum != maxPages && type === "next") {
    pageNum += 1;
  }

  getPage(pageNum);
}

getPage(pageNum);

previousBtn.addEventListener("click", () => {
  update("previous");
});

nextBtn.addEventListener("click", () => {
  update("next");
});
