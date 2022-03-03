const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const formEl = document.querySelector(".task-form");
const taskEl = formEl.elements.task;
const listEl = document.querySelector(".task-list");

taskEl.focus;
function getRamdomId() {
  return Math.floor(Math.random() * (10000 - 1000) + 1000);
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = taskEl.value;

  const newTask = {
    id: getRamdomId(),
    text,
  };

  tasks.unshift(newTask);

  taskEl.value = "";
  taskEl.focus();

  localStorage.setItem("tasks", JSON.stringify(tasks));
});

function renderTasks() {
  listEl.innerHTML = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "task-item list-group-item list-group-item-dark mb-1 mt-3";
        const text = document.createTextNode(task.text);
        const button = document.createElement("button");
        button.className =
          "btn btn-delete btn-secondary position-absolute top-0 end-0";
      listEl.innerHTML += `<li class="task-item list-group-item list-group-item-dark mb-1 mt-3">
                            ${task.text}
                <button onclick="" class="btn btn-delete btn-secondary position-absolute top-0 end-0">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </li>`;
  });
}
renderTasks();
