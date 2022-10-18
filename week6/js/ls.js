function saveTask(newtask) {
  let num = localStorage.length + 1;
  localStorage.setItem(`task ${num}`, JSON.stringify(newtask));
}

function deleteTask(task) {
  localStorage.removeItem(task);
}

function getTasks(taskList) {
  for (let i = 0; i < localStorage.length; i++) {
    taskList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
}
