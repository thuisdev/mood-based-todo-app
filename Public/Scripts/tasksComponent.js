// =====================
// DOM SELECTORS
// =====================
const taskList = document.querySelector("#task-list");
const completedTaskList = document.getElementById("completed-task-list");
const showCompletedBtn = document.getElementById("show-completed-btn");
const completedSection = document.getElementById("completed-section");

// =====================
// DUMMY TASKS (first load)
// =====================
const dummyTasks = [
    { name: "Read a book", duration: 45, time: "12:43 PM", completed: false },
    { name: "Workout", duration: 30, time: "15:00 PM", completed: false },
];

if (tasks.length === 0) {
    tasks = [...dummyTasks];
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =====================
// RENDER SINGLE TASK
// =====================
const renderTask = (task, index) => {
    const taskCard = document.createElement("div");
    taskCard.className = task.completed ? "task-card completed-task" : "task-card";

    taskCard.innerHTML = `
        <div class="task-component">
            <div class="task-component-left">
                <p class="task-name">${task.name}</p>
                <p class="task-mins">${task.duration} mins</p>
                <p class="task-time">${task.time}</p>
            </div>
            <div class="task-component-btn">
                <button class="task-component-delete-btn" data-index="${index}" type="button">X</button>
                <button class="task-component-check-btn" data-index="${index}" type="button">✓</button>
            </div>
        </div>
    `;

    const checkBtn = taskCard.querySelector(".task-component-check-btn");
    const deleteBtn = taskCard.querySelector(".task-component-delete-btn");

    // Click on card → open edit dialog
    taskCard.addEventListener("click", () => {
        editingTaskIndex = index;
        taskNameInput.value = task.name;
        taskDurationInput.value = task.duration;
        taskTimeInput.value = task.time;
        taskDialogTitle.textContent = "Edit Task";
        taskCreateBtn.textContent = "Save Changes";
        clearTaskErrors();
        taskDialog.showModal();
    });

    checkBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    });

    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
        showSuccessMessage("Task deleted successfully!");
    });

    return taskCard;
}

// =====================
// LOAD ALL TASKS
// =====================
const loadTasks = () => {
    taskList.innerHTML = "";
    completedTaskList.innerHTML = "";

    if (tasks.every((task) => task.completed === true)) {
        completeAllBtn.style.display = "none";
    } else {
        completeAllBtn.style.display = "block";
    }

    tasks.forEach((task, index) => {
        const taskCard = renderTask(task, index);
        if (task.completed) {
            completedTaskList.appendChild(taskCard);
        } else {
            taskList.appendChild(taskCard);
        }
    });
}

loadTasks();

// =====================
// SHOW / HIDE COMPLETED
// =====================
showCompletedBtn.addEventListener("click", () => {
    completedSection.classList.toggle("hidden");

    if (completedSection.classList.contains("hidden")) {
        showCompletedBtn.textContent = "Show Completed";
    } else {
        showCompletedBtn.textContent = "Hide Completed";
    }
});
