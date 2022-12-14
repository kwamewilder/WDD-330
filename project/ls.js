// read data from ls

export function readFromLS(key){
    let localArray = JSON.parse(localStorage.getItem(key));
    return localArray;
}

// write data from ls

export function writeToLS(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}