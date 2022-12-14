let mapText1 = document.querySelector("#map-interface span:nth-of-type(1)");
let mapText2 = document.querySelector("#map-interface span:nth-of-type(2)");

let zoomButton = document.getElementById("zoom");
zoomButton.addEventListener("click", () => this.toggleZoom());

let worldmapSVG = "world-map.svg";
let mapDiv = document.getElementById("map");
let mapElement = "";
const parser = new DOMParser();

fetchAndRenderMap(worldmapSVG);

let style = document.createElement("style");
// style.appendChild(document.createTextNode(""));
document.head.appendChild(style);
style.sheet.insertRule(".us {fill: #48f !important}", 0);
mapText1.innerHTML = "Country: United States of America";
mapText1.dataset.code = "us";
style.sheet.insertRule(".au {fill: #f84 !important;}", 1);
mapText2.innerHTML = "Country: Australia";
mapText2.dataset.code = "au";
// colorCountry('us');

let currentCountry1 = "United States of America";
let currentCountry2 = "Australia";

function fetchAndRenderMap(url) {
    /*
    let headers = new Headers({
        'Accept-Encoding': 'br, gzip',
        'Test-header': 'string'
    });
    let request = new Request(url,
        {
            method: 'GET',
            mode: 'cors',
            header: headers
        }
    );
    */

    // request has compression headers in it by default

    fetch(url)
        .then((response) => {
            // console.log('Waiting...');
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then((response) => response.text())
        .then((text) => {
            return parser
                .parseFromString(text, "image/svg+xml")
                .querySelector("svg");
        })
        .then((map) => {
            map.addEventListener("click", (event) => countryClicked(event));
            map.addEventListener("contextmenu", (event) =>
                countryClicked(event)
            );
            map.addEventListener("dblclick", (event) => doubleClickZoom(event));
            mapElement = map;
            mapDiv.appendChild(map);
        })
        .catch((error) => console.log("There was an error:", error));
}

function countryClicked(event) {
    // console.log(event);

    event.preventDefault();

    // console.log(event);

    let target = event.target;

    if (target.tagName == "svg") return false; // area outside map bounds
    if (target.id == "ocean") return false; // we're going ocean?

    while (target.parentElement.tagName != "svg") {
        // go up tree until it's a root country element
        // possibly re-work to manage sub-nations and colonies <title>s
        target = target.parentElement;
    }

    let code = target.id;
    let name = target.getElementsByTagName("title")[0].innerHTML;
    // console.log(`Country: ${code} Name: ${name}`, target);
    // console.log(event);
    // console.log(`Button ${event.buttons}, X ${event.layerX}, Y ${event.layerY}`);

    markCountry(code, name, event.buttons === 0 ? 0 : 1);
}

function markCountry(code, name, button) {
    if (
        code === mapText1.dataset.code ||
        code === mapText2.dataset.code
    ) {
        console.log("Already marked");
        return false;
    }

    if (button === 0) {
        // todo matrix check: country to language
        // need returns: css rule string, lang name string, lang code string
        style.sheet.deleteRule(0);
        style.sheet.insertRule(`.${code} {fill: #48f !important}`, 0);
        mapText1.innerHTML = `Country: ${name}`;
        mapText1.dataset.code = code;
        currentCountry1 = name;
    } else {
        style.sheet.deleteRule(1);
        style.sheet.insertRule(`.${code} {fill: #f84 !important}`, 1);
        mapText2.innerHTML = `Country: ${name}`;
        mapText2.dataset.code = code;
        currentCountry2 = name;
    }
    // console.log(style.sheet.cssRules);
}

function toggleZoom() {
    if (mapDiv.classList.contains("zoomed")) {
        this.zoomOut();
    } else {
        mapDiv.classList.add("zooming");
        mapText1.innerHTML = "Zoom where?";
        mapDiv.addEventListener("click", (event) => this.zoomIn(event), {
            once: true,
        });
    }
}

function doubleClickZoom(event) {
    if (mapDiv.classList.contains("zoomed")) {
        this.zoomOut();
    } else {
        this.zoomIn(event);
    }
}

function zoomOut() {
    mapDiv.classList.remove("zoomed");
    zoomButton.innerText = "Zoom in";
}

function zoomIn(event) {
    // console.log(event);
    mapText1.innerHTML = `Country: ${currentCountry1}`;
    zoomButton.innerText = "Zoom out";
    mapDiv.classList.remove("zooming");
    perX = event.layerX / mapDiv.scrollWidth;
    perY = event.layerY / mapDiv.scrollHeight;
    mapDiv.classList.add("zoomed");
    mapDiv.scrollTo(
        perX * (mapDiv.scrollWidth - mapDiv.clientWidth),
        perY * (mapDiv.scrollHeight - mapDiv.clientHeight)
    );
    // console.log(perX, perY, perX * mapDiv.scrollWidth, perY * mapDiv.scrollHeight)
}
