let count = 1;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const taskInput = document.getElementById("new-task");
  const taskList = document.getElementById("todo-list");

  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", modifyTask);

  function addTask(event) {

    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                <span> ${count}.
                ${taskText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button material-icons">delete </button>
            `;
      taskList.appendChild(li);
      count = count + 1;

      taskInput.value = "";

    }
  }

  function modifyTask(event) {
    if (event.target.classList.contains("edit-button")) {
      const li = event.target.parentElement;
      const span = li.querySelector("span");
      const newTaskText = prompt("Edit your task", span.textContent);
      if (newTaskText !== null) {
        span.textContent = newTaskText.trim();
      }
    } else if (event.target.classList.contains("delete-button")) {
      const li = event.target.parentElement;
      taskList.removeChild(li);
      count = count - 1;
    }
  }
});
