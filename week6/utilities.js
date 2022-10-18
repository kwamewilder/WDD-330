/**
do a querySelector lookup 
@param {string} selector - The selector passed to querySelector
@return {element} - The matching element or null if not found 
*/
function qs(selector) {
    let foundElement = document.querySelectorAll(selector);
    return foundElement
}

/**
add a touchend event listener to an element for mobile with a click event fallback for desktops 
@param {string} elementSelector The selector for the element to attach the listener to
@param {function} callback The callback function to run
*/
function onTouch(elementSelector, callback) {
    let elements = qs(elementSelector);
    for (let i = 0; i < elements.length; i++) {
        ['click', 'ontouch'].forEach(tap => elements[i].addEventListener(tap, callback, false));
    }
}

export {
    qs,
    onTouch
};