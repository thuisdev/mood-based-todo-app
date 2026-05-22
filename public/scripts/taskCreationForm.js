// DOM SELECTORS
const taskDialog = document.querySelector("#task-dialog");
const addTaskOpenBtn = document.querySelector("#add-task-open-btn");
const addTaskCancelBtn = document.querySelector("#add-task-cancel-btn");
const taskNameInput = document.querySelector("#task-name-input");
const taskDurationInput = document.querySelector("#task-duration-input");
const taskTimeInput = document.querySelector("#task-time-input");
const taskNameError = document.querySelector("#task-name-error");
const taskDurationError = document.querySelector("#task-duration-error");
const taskTimeError = document.querySelector("#task-time-error");
const taskCreateBtn = document.querySelector("#task-create-btn");
const taskDialogTitle = document.querySelector("#task-dialog-title");

// OPEN / CANCEL DIALOG
addTaskOpenBtn.addEventListener("click", () => {
    editingTaskIndex = null;
    taskDialogTitle.textContent = "Add a new task";
    taskCreateBtn.textContent = "Create Task";
    taskNameInput.value = "";
    taskDurationInput.value = "";
    taskTimeInput.value = "";
    clearTaskErrors();
    taskDialog.showModal();
});

addTaskCancelBtn.addEventListener("click", () => {
    editingTaskIndex = null;
    taskDialogTitle.textContent = "Add a new task";
    taskCreateBtn.textContent = "Create Task";
    taskNameInput.value = "";
    taskDurationInput.value = "";
    taskTimeInput.value = "";
    clearTaskErrors();
    taskDialog.close();
});

// CREATE / SAVE TASK
taskCreateBtn.addEventListener("click", () => {
    const name = taskNameInput.value;
    const duration = taskDurationInput.value;
    const time = taskTimeInput.value;

    clearTaskErrors();

    let isValid = true;

    if (!name) {
        taskNameError.textContent = "⚠ Please enter a task name";
        taskNameInput.classList.add("input-invalid");
        isValid = false;
    }

    if (!duration) {
        taskDurationError.textContent = "⚠ Please enter a duration";
        taskDurationInput.classList.add("input-invalid");
        isValid = false;
    } else if (Number(duration) <= 0) {
        taskDurationError.textContent = "⚠ Duration must be greater than 0";
        taskDurationInput.classList.add("input-invalid");
        isValid = false;
    }

    if (!time) {
        taskTimeError.textContent = "⚠ Please select a time";
        taskTimeInput.classList.add("input-invalid");
        isValid = false;
    }

    if (!isValid) return;

    if (editingTaskIndex === null) {
        const task = { name, duration, time, completed: false };
        tasks.push(task);
        showSuccessMessage("Task created successfully!");
    } else {
        tasks[editingTaskIndex] = {
            ...tasks[editingTaskIndex],
            name,
            duration,
            time,
        };
        showSuccessMessage("Task updated successfully!");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();

    editingTaskIndex = null;
    taskCreateBtn.textContent = "Create Task";
    taskDialogTitle.textContent = "Add a new task";
    taskDialog.close();
    taskNameInput.value = "";
    taskDurationInput.value = "";
    taskTimeInput.value = "";
    clearTaskErrors();
});

// CLEAR VALIDATION ERRORS
const clearTaskErrors = () => {
    taskNameError.textContent = "";
    taskDurationError.textContent = "";
    taskTimeError.textContent = "";
    taskNameInput.classList.remove("input-invalid");
    taskDurationInput.classList.remove("input-invalid");
    taskTimeInput.classList.remove("input-invalid");
}
