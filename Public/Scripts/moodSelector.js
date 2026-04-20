// =====================
// DOM SELECTORS
// =====================
const moodOpenBtn = document.querySelector("#mood-open-btn");
const moodCloseBtn = document.querySelector("#mood-close-btn");
const moodSelectorDialog = document.querySelector("#mood-selector-dialog");
const moodSlider = document.querySelector("#mood-slider");
const moodSadBtn = document.querySelector("#mood-sad-btn");
const moodNeutralBtn = document.querySelector("#mood-neutral-btn");
const moodHappyBtn = document.querySelector("#mood-happy-btn");

// =====================
// MOOD STATE
// Declared here so suggestedTaskComponent.js can read it
// =====================
const moods = ["😢", "😐", "😊"];
const savedMoodIndex = localStorage.getItem("currentMoodIndex");
let currentMoodIndex = savedMoodIndex === null ? 1 : Number(savedMoodIndex);

// =====================
// OPEN / CLOSE DIALOG
// =====================
moodOpenBtn.addEventListener("click", () => moodSelectorDialog.showModal());
moodCloseBtn.addEventListener("click", () => moodSelectorDialog.close());

// =====================
// UPDATE MOOD DISPLAY
// =====================
const updateMoodDisplay = () => {
    moodOpenBtn.textContent = `Mood: ${moods[currentMoodIndex]}`;
    moodSlider.value = currentMoodIndex;
    localStorage.setItem("currentMoodIndex", currentMoodIndex);
    loadSuggestedTasks(currentCondText);
}

// =====================
// MOOD BUTTON EVENTS
// =====================
moodHappyBtn.addEventListener("click", () => {
    currentMoodIndex = 2;
    updateMoodDisplay();
});

moodNeutralBtn.addEventListener("click", () => {
    currentMoodIndex = 1;
    updateMoodDisplay();
});

moodSadBtn.addEventListener("click", () => {
    currentMoodIndex = 0;
    updateMoodDisplay();
});

moodSlider.addEventListener("input", (event) => {
    currentMoodIndex = Number(event.target.value);
    updateMoodDisplay();
});

// Run once on page load to set initial state
updateMoodDisplay();
