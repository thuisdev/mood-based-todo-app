// DOM SELECTORS
const moodSelectorDialog = document.querySelector("#mood-selector-dialog");
const moodSlider = document.querySelector("#mood-slider");
const moodOpenBtn = document.querySelector("#mood-open-btn");
const moodCloseBtn = document.querySelector("#mood-close-btn");
const moodSadBtn = document.querySelector("#mood-sad-btn");
const moodNeutralBtn = document.querySelector("#mood-neutral-btn");
const moodHappyBtn = document.querySelector("#mood-happy-btn");

// MOOD STATE (read by suggestedTaskComponent.js)
const moods = ["😢", "😐", "😊"];
let currentMoodIndex = Number(localStorage.getItem("currentMoodIndex") ?? 1);

// OPEN / CLOSE
moodOpenBtn.addEventListener("click", () => moodSelectorDialog.showModal());
moodCloseBtn.addEventListener("click", () => moodSelectorDialog.close());

// UPDATE DISPLAY
const updateMoodDisplay = () => {
    moodOpenBtn.textContent = `Mood: ${moods[currentMoodIndex]}`;
    moodSlider.value = currentMoodIndex;
    localStorage.setItem("currentMoodIndex", currentMoodIndex);
    loadSuggestedTasks(currentCondText);
};

// MOOD BUTTONS
moodSadBtn.addEventListener("click", () => { currentMoodIndex = 0; updateMoodDisplay(); });
moodNeutralBtn.addEventListener("click", () => { currentMoodIndex = 1; updateMoodDisplay(); });
moodHappyBtn.addEventListener("click", () => { currentMoodIndex = 2; updateMoodDisplay(); });

moodSlider.addEventListener("input", ({ target }) => {
    currentMoodIndex = Number(target.value);
    updateMoodDisplay();
});

// INIT
updateMoodDisplay();