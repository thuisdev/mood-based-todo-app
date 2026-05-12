// GLOBAL SHARED STATE

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editingTaskIndex = null;
let currentCondText = "";
let currentIconURL = "";

// SUCCESS MESSAGE
const successMessage = document.querySelector("#success-message");

const showSuccessMessage = (message) => {
    successMessage.textContent = message;
    successMessage.classList.add("show");

    setTimeout(() => {
        successMessage.classList.remove("show");
    }, 2500);
}

// WEATHER
const weatherOpenBtn = document.getElementById("weather-open-btn");
const weatherDialog = document.getElementById("weather-dialog");
const weatherCloseBtn = document.getElementById("weather-close-btn");
const weatherDegree = document.getElementById("degree");
const weatherArt = document.getElementById("weather-art");
const weatherHumidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weather-icon");
const firstWeatherIcon = document.getElementById("first-weather-icon");

weatherOpenBtn.addEventListener("click", () => {
    weatherDialog.showModal();
});

weatherCloseBtn.addEventListener("click", () => {
    weatherDialog.close();
});

navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
        .then(res => res.json())
        .then(weatherData => {
            const temp = weatherData.current.temp_c;
            const hum = weatherData.current.humidity;
            const condText = weatherData.current.condition.text;
            const iconURL = `https:${weatherData.current.condition.icon}`;

            weatherDegree.textContent = `${temp}°C`;
            weatherHumidity.textContent = `Humidity: ${hum}%`;
            weatherArt.textContent = condText;
            weatherIcon.src = iconURL;
            firstWeatherIcon.src = iconURL;

            currentCondText = condText;
            currentIconURL = iconURL;

            loadSuggestedTasks(condText);
        });
}, (error) => {
    console.log("Could not load Location:", error.message);
});

// COMPLETE ALL BUTTON
const completeAllBtn = document.querySelector("#complete-all-btn");

completeAllBtn.addEventListener("click", () => {
    tasks.forEach((task) => (task.completed = true));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
});
