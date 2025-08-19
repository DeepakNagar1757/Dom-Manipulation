let taskListContainer = document.querySelector(".taskListContainer");
let addTaskButton = document.querySelector("#addTaskButton");
let taskInput = document.querySelector("#taskInput");

let taskList = [
  {
    id: 101,
    task: "Buy groceries",
  },
  {
    id: 102,
    task: "Walk the dog",
  },
  {
    id: 103,
    task: "Read a book",
  },
];

const renderTaskList = (task) => {
  taskListContainer.innerHTML = "";
  taskList.forEach((task) => {
    let taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
            <h3>${task.task}</h3>
        `;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteTaskButton");
    deleteButton.addEventListener("click", () => {
      taskList = taskList.filter((t) => t.id !== task.id);
      renderTaskList(taskList);
    });
    taskItem.appendChild(deleteButton);
    taskListContainer.appendChild(taskItem);
  });
};

renderTaskList(taskList); // Initial render

addTaskButton.addEventListener("click", () => {
  let newTask = taskInput.value.trim();
  if (newTask) {
    let newTaskObj = {
      id: Date.now(), // Unique ID based on timestamp
      task: newTask,
    };
    taskList.push(newTaskObj);
    renderTaskList(taskList);
    taskInput.value = ""; // Clear input field
  }
});
