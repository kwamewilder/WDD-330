import {
    readFromLS,
    writeToLS
} from './ls.js';

import {
    addListeners
} from './main.js';

import {
    onTouch,
    qs
} from './utilities.js';

class Todos {
    /**
     * @param {string} storeKey
     * @param {element} listElem 
     */
    constructor(listElem, storeKey) {
        this.listElem = listElem;
        this.storeKey = storeKey;
    }

    addTodo() {
        saveTodo(qs('#taskText')[0].value, this.storeKey);
        this.listTodos();
        qs('#taskText')[0].value = "";
    }

    listTodos(list) {
        if (!list) {
            list = getTodos(this.storeKey);
        }
        if (!list) {
            list = [];
        }
        renderTodoList(list, this.listElem);
        addListeners()
    }

    completeTodo() {
        let itemIndex = null;
        let itemID = event.target.id.substring('checkbox'.length);
        todoList = getTodos(this.storeKey)
        todoList.forEach(objectItem => {
            if (String(objectItem.id) == itemID) {
                itemIndex = todoList.indexOf(objectItem)
            }
        });
        todoList[itemIndex].completed = !todoList[itemIndex].completed
        writeToLS(this.storeKey, todoList);
        this.filterTodos()
    }

    removeTodo() {
        let itemIndex = null;
        todoList = getTodos(this.storeKey)
        todoList.forEach(objectItem => {
            if (String(objectItem.id) == event.target.id) {
                itemIndex = todoList.indexOf(objectItem)
            }
        });
        todoList.splice(itemIndex, 1)
        writeToLS(this.storeKey, todoList);
        this.filterTodos()
    }

    filterTodos() {
        let filterID = ""
        let radios = Array.prototype.slice.call(qs('.filter input'))
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                filterID = radios[i].id;
            }
        }
        let list = getTodos(this.storeKey)
        if (filterID == "activeTasks") {
            list = list.filter(items => !items.completed)
        } else if (filterID == "completedTasks") {
            list = list.filter(items => items.completed)
        } else {
            if (list === null) {
                list = []
            }
        }
        this.listTodos(list)
    }
}

let todoList = [];

/** build a todo object, add it to the todoList, and save the new list to local storage.
 * @param {string} key The key under which the value is stored under in LS 
 * @param {string} task The text of the task to be saved.
 */
function saveTodo(task, key) {
    if (task !== "" && task !== undefined) {
        let bool = Boolean(false);
        todoList = getTodos(key)
        if (todoList === null) {
            todoList = [];
        }
        let taskItem = {
            id: Date.now(),
            content: task,
            completed: bool
        };
        todoList.push(taskItem);
        writeToLS(key, todoList);
    }
}

/**
 * check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param  {string} key The key under which the value is stored under in LS
 * @return {array}     The value as an array of objects
 */
function getTodos(key) {
    todoList = readFromLS(key);
    return todoList;
}

/** 
 * foreach todo in list, build a li element for the todo, and append it to element
 * @param {array} list The list of tasks to render to HTML 
 * @param {element} element The DOM element to insert our list elements into.
 */
function renderTodoList(list, element) {
    element.innerHTML = "";
    let counter = 1
    list.forEach(todo => {
        let mark = ""
        if (todo.completed) {
            mark = "checked"
        }
        let item = document.createElement("li");
        item.innerHTML = `
        <input type="checkbox" id="checkbox${todo.id}" ${mark}>
        <label for="checkbox${todo.id}">${todo.content}</label>
        <button class="remove" id=${todo.id}>X</button>
        `
        element.appendChild(item);
        counter++
    })
    taskCounter(counter - 1)
}

function taskCounter(count) {
    if (!count) {
        count = "0"
    }
    let item = qs('#taskCount')
    console.log()
    item[0].innerHTML = `${count} tasks`
}

export default Todos