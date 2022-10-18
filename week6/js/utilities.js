let tasks = document.getElementById("tasks-remaining");
let taskInput = document.getElementById("task-input");
const add = document.getElementById("add-button");
const taskList = [];
let totalTasks = 0;

function updateRemaining() {
  tasks.textContent = totalTasks != 1 ? `${totalTasks} tasks left` : `${totalTasks} task left`;
}

add.addEventListener("click", () => {
  if (taskInput.value != "") {
    let newTask = {
      id: Date.now(),
      content:
        taskInput.value.charAt(0).toUpperCase() + taskInput.value.slice(1),
      completed: "false",
    };
    saveTask(newTask);
    addTask(newTask);
    totalTasks += 1;
    updateRemaining();
    taskInput.value = "";
  }
});

getTasks(taskList);
taskList.sort((a, b) => a.id - b.id);
taskList.forEach((item) => {
  addTask(item);
  totalTasks += 1;
});

updateRemaining();
