window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value.trim();

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    // Create task elements
    const taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.innerHTML = `
      <div class="content">
        <input type="text" class="text" value="${task}" readonly />
      </div>
      <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    listEl.appendChild(taskEl);
    input.value = "";

    const taskInputEl = taskEl.querySelector(".text");
    const editBtn = taskEl.querySelector(".edit");
    const deleteBtn = taskEl.querySelector(".delete");

    editBtn.addEventListener('click', () => {
      if (editBtn.innerText.toLowerCase() === "edit") {
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
        editBtn.innerText = "Save";
      } else {
        taskInputEl.setAttribute("readonly", "readonly");
        editBtn.innerText = "Edit";
      }
    });

    deleteBtn.addEventListener('click', () => listEl.removeChild(taskEl));
  });
});
