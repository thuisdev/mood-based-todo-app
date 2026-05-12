// DOM SELECTORS
const suggestedTaskList = document.querySelector("#suggested-task-list");

// SUGGESTED TASK DATA
const suggestedWeatherTasks = {
    cloudy: {
        title: "Meditation",
        duration: 15,
        time: "12:43",
        period: "PM",
        basedOn: "Weather",
        completed: false,
    },
    rainy: {
        title: "Go to the gym",
        duration: 1,
        time: "10:00",
        period: "AM",
        basedOn: "Weather",
        completed: false,
    },
    sunny: {
        title: "Go for a walk",
        duration: 30,
        time: "15:43",
        period: "PM",
        basedOn: "Weather",
        completed: false,
    },
};

const suggestedMoodTasks = [
    {
        title: "Take a break",
        duration: 14,
        time: "10:30",
        period: "PM",
        basedOn: "Mood",
        completed: false,
    },
    {
        title: "Read a book",
        duration: 45,
        time: "12:43",
        period: "PM",
        basedOn: "Mood",
        completed: false,
    },
    {
        title: "Drink a Beer",
        duration: 1,
        time: "12:00",
        period: "PM",
        basedOn: "Mood",
        completed: false,
    },
];

// RENDER SINGLE SUGGESTED TASK
const renderSuggestedTask = (task) => {
    const suggestedCard = document.createElement("div");
    suggestedCard.className = task.completed
        ? "suggested-card completed-suggested"
        : "suggested-card";

    const iconHTML = task.basedOn === "Mood"
        ? moods[currentMoodIndex]
        : `<img src="${currentIconURL}" style="width:28px;">`;

    suggestedCard.innerHTML = `
        <div class="suggested-left">
            <p class="suggested-title">${task.title}</p>
            <p class="suggested-mins">${task.duration} mins</p>
            <p class="suggested-time">${task.time} <span class="pm">${task.period}</span></p>
        </div>
        <div class="suggested-right">
            <p class="suggested-icon">${iconHTML}</p>
            <p class="based">Based on</p>
            <p class="based-on">${task.basedOn}</p>
            <button class="suggested-task-check-btn" type="button">✓</button>
        </div>
    `;

    const checkBtn = suggestedCard.querySelector(".suggested-task-check-btn");
    checkBtn.addEventListener("click", () => {
        task.completed = !task.completed;
        loadSuggestedTasks(currentCondText);
    });

    suggestedTaskList.appendChild(suggestedCard);
}

// LOAD SUGGESTED TASKS
const loadSuggestedMoodTasks = () => {
    renderSuggestedTask(suggestedMoodTasks[currentMoodIndex]);
}

const loadSuggestedWeatherTasks = (condText) => {
    if (condText.toLowerCase().includes("sun")) {
        renderSuggestedTask(suggestedWeatherTasks.sunny);
    } else if (condText.toLowerCase().includes("rain")) {
        renderSuggestedTask(suggestedWeatherTasks.rainy);
    } else if (condText.toLowerCase().includes("cloudy")) {
        renderSuggestedTask(suggestedWeatherTasks.cloudy);
    }
}

const loadSuggestedTasks = (condText) => {
    suggestedTaskList.innerHTML = "";
    loadSuggestedMoodTasks();
    loadSuggestedWeatherTasks(condText);
}
