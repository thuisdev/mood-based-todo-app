<div align="center">

# MoodDo 🌤️

**A mood & weather-aware task manager.**  
Built with vanilla JavaScript, Node.js, and real-time weather data.

[![GitHub](https://img.shields.io/badge/GitHub-thuisdev-181717?style=flat&logo=github)](https://github.com/thuisdev)
[![X](https://img.shields.io/badge/X-thuisdev-000000?style=flat&logo=x)](https://x.com/thuisdev)

</div>

---

## What it does

MoodDo suggests tasks based on **how you feel** and **what the weather is like** — so your to-do list actually fits your day.

- Add, edit, delete and complete tasks
- Select your mood via slider (😢 / 😐 / 😊)
- Live weather pulled from your geolocation
- Smart task suggestions based on mood + weather combination
- User profile with login, logout & edit
- Fully persisted via `localStorage`
- Responsive across desktop, tablet & mobile

---

## Tech Stack

| | |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Templating | Handlebars (express-handlebars) |
| Backend | Node.js + Express |
| API | [WeatherAPI](https://www.weatherapi.com/) |

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/thuisdev/mood-based-todo-app.git
cd mood-based-todo-app
npm install
```

### 2. Set up environment variables

Create a `.env` file in the root directory:

```env
WEATHER_API_KEY=your_api_key_here
```

Get a free API key at [weatherapi.com](https://www.weatherapi.com/).  
The `.env` file is already in `.gitignore` — never commit it.

### 3. Run

```bash
npx nodemon app.js
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
mood-based-todo-app/
├── public/
│   ├── Scripts/
│   │   ├── suggestedTaskComponent.js
│   │   ├── taskCreationForm.js
│   │   └── tasksComponent.js
│   └── Styles/
│       ├── index.css
│       ├── loginForm.css
│       ├── moodSelector.css
│       ├── suggestedTaskComponent.css
│       ├── taskCreationForm.css
│       └── tasksComponent.css
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── addTaskDialog.handlebars
│   │   ├── footer.handlebars
│   │   ├── header.handlebars
│   │   ├── loginDialog.handlebars
│   │   ├── moodSelectorDialog.handlebars
│   │   └── weatherDialog.handlebars
│   └── home.handlebars
├── app.js
├── .gitignore
├── example.env
├── package.json
└── README.md
```

---

<div align="center">
  <sub>Built by <a href="https://github.com/thuisdev">@thuisdev</a></sub>
</div>
