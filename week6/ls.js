/**
read a value from local storage and parse it as JSON 
@param {string} key The key under which the value is stored under in LS
@return {array} The value as an array of objects 
*/
function readFromLS(key) {
    let toDoList = JSON.parse(localStorage.getItem(key));
    //let toDoList = localStorage.getItem(key);
    return toDoList
}

/**
write an array of objects to local storage under the provided key 
@param {string} key The key under which the value is stored under in LS
@param {array} data The information to be stored as an array of objects. Must be serialized.
*/
function writeToLS(key, data) {
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}

export {
    readFromLS,
    writeToLS
};