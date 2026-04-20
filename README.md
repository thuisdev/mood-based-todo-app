# 🌤️ Mood-based-todo-app

> A full-stack web application that combines real-time weather data with personal mood tracking — built from scratch over 4 weeks as a hands-on introduction to modern web development.

---

## 📌 Project Overview

MoodDo is a beginner-to-intermediate learning journey that results in a fully functional mood and weather tracking app. Users can log their current mood, view live weather data for their location, and get suggested tasks based on their mood and current weather conditions.

The project is structured into four weekly milestones, each introducing a new layer of the development stack.

---

## 🗓️ Development Roadmap

### Week 01 — Version Control & Project Setup ✅
**Goal:** Establish a solid foundation using Git and GitHub.

- Initialize a local Git repository
- Create and configure a GitHub remote repository
- Learn the core Git workflow: `init`, `add`, `commit`, `push`, `pull`, `clone`
- Write the initial `README.md`
- Understand branching basics and why version control matters

**Outcome:** A live GitHub repository with a clean commit history and project documentation in place.

---

### Week 02 — Static Front End (HTML & CSS) ✅
**Goal:** Build the visual interface of the app before adding any logic.

- Structure the app layout using semantic HTML5
- Style the UI with CSS (flexbox/grid, responsive design)
- Built key UI components:
  - Login Form
  - Task Component
  - Suggested Task Component
  - Task Creation Form
  - Mood Selector
- Fully responsive design for desktop, tablet and mobile

**Outcome:** A fully styled, static front end with all components built and ready for JavaScript integration in Week 03.

---

### Week 03 — JavaScript Logic & Interactivity ✅
**Goal:** Bring the interface to life with dynamic functionality.

- Connect all components into a single `index.html`
- Add, edit, and delete tasks using vanilla JavaScript
- Manipulate the DOM to update the UI in real time
- Store task and user data locally using `localStorage`
- Handle user events (clicks, form submissions, input changes)
- Implement full CRUD functionality for tasks
- Login, logout and edit profile functionality

**Outcome:** A fully interactive app that works entirely in the browser.

---

### Week 04 — Backend Server, API Integration & Templating ✅
**Goal:** Connect the app to the real world with a server, live data, and dynamic templating.

- Set up a Node.js + Express backend server on port 3000
- Serve static files (HTML, CSS, JS) from a `public/` directory using Express static middleware
- Integrated WeatherAPI to fetch real-time weather data based on user geolocation
- Display live weather conditions (temperature, humidity, condition, icon)
- Implemented Suggested Tasks component — suggests tasks dynamically based on current mood and weather conditions
- Converted the entire frontend to Handlebars templates:
  - `layouts/main.handlebars` — base layout
  - `home.handlebars` — main page
  - Partials: `header`, `footer`, `weatherDialog`, `addTaskDialog`, `loginDialog`, `moodDialog`
- Added "Complete All" button to mark all tasks as done at once
- Fully responsive design using CSS Grid for desktop and mobile

**Outcome:** A fully functional full-stack web app with real-time weather data, dynamic task suggestions, and server-side templating.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Front-end | HTML, CSS, JavaScript |
| Templating | Handlebars (express-handlebars) |
| Back-end | Node.js + Express |
| API | WeatherAPI |
| Version Control | Git + GitHub |

---

## 📁 Project Structure

```
mood-based-todo-app/
├── public/
│   ├── Assets/
│   ├── Scripts/
│   │   └── index.js
│   └── Styles/
│       └── index.css
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── header.handlebars
│   │   ├── footer.handlebars
│   │   ├── weatherDialog.handlebars
│   │   ├── addTaskDialog.handlebars
│   │   ├── loginDialog.handlebars
│   │   └── moodDialog.handlebars
│   └── home.handlebars
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npx nodemon app.js

# Open in browser
http://localhost:3000
```

---

*Last updated: Week 04*
