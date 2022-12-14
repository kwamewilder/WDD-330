// query selectors?

/**
 * Do a querySelector lookup
 * @param {string} Selector
 * The selector passed to querySelector
 * @return {element}
 * The matching element or null if not found
 */

export function qs(selector) {
    return document.querySelector(selector);
}

/**
 * Add a touchend event listener to an element for mobile
 * with a click event fallback for desktops
 * @param {string} elementSelector
 * The selector for the element to attach the listener to
 * @param {function} callback
 * The callback function to run
 */

export function selectorListener(type, elementSelector, callback) {
    elementListener(type, qs(elementSelector), callback);

    /*
    if (/Mobile/i.test(window.navigator.userAgent)) {
        qs(elementSelector).addEventListener('touchend', callback);
    } else {
        qs(elementSelector).addEventListener('mouseup', callback);
    }
    */
}

/**
 * Add a touchend event listener to an element for mobile
 * with a click event fallback for desktops
 * @param {HTMLElement} element
 * The element to attach the listener to
 * @param {function} callback
 * The callback function to run
 */

export function elementListener(type, element, callback, callback2) {

    if (type === 'click') {
        if (/Mobile/i.test(window.navigator.userAgent)) {
            element.addEventListener('touchend', callback);
        } else {
            element.addEventListener('mouseup', callback);
        }
    }

    if (type === 'contextmenu') {
        if (/Mobile/i.test(window.navigator.userAgent)) {
            return false;
        } else {
            element.addEventListener('contextmenu', callback);
        }
    }

    if (type === 'mousemove') {
        element.addEventListener('mousemove', callback);
    }

}

let doubleClickTest1 = false;
let doubleClickTest2 = false;
let timeout1 = null;
let timeout2 = null;

/**
 * Run callback only if event is part of a double-click
 * @param {event} event
 * @param {callback} callback
 */

export function handleDoubleClick(event, callback) {
    if (doubleClickTest1 === false) {
        doubleClickTest1 = true;
        timeout1 = setTimeout(() => {
            doubleClickTest1 = false;
        }, 500);
        return false;
    }
    callback(event);
}

/**
 * Run callback only if event is a single-click
 * @param {event} event
 * @param {callback} callback
 */


export function handleSingleClick(event, callback) {
    if (doubleClickTest2 === true) {
        doubleClickTest2 = false;
        // console.log('clearing');
        clearTimeout(timeout2);
        return false;
    }
    if (doubleClickTest2 === false) {
        doubleClickTest2 = true;
        // console.log('setting');
        timeout2 = setTimeout(() => {
            // console.log('running');
            doubleClickTest2 = false;
            callback(event);
        }, 500);
        return false;
    }
}

/**
 * Clear timeouts used to determine single- vs double-click behaviors
 */

export function clearClickTestTimeouts() {
    // console.log('clearing both');
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    doubleClickTest1 = false;
    doubleClickTest2 = false;
}
