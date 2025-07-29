# 🎬 Movie Explorer – React TMDB App

A visually-rich, Netflix-style movie web app built with **React.js**, **Tailwind CSS**, and **TMDB API**, allowing users to explore trending, top-rated, and upcoming movies and TV shows with smooth horizontal scrolling, search functionality, and detailed pages for each title.

---

## 🚀 Live Demo

🌐 [https://movies-explorer-by-tanmay.vercel.app/](https://movies-explorer-by-tanmay.vercel.app/)]

---

## 🧠 Why I Built This

This project was developed to demonstrate my proficiency in **modern front-end technologies**, **API integration**, and **responsive UI design**. The goal was to mimic a real-world streaming platform's UI/UX, while also focusing on performance, user experience, and clean architecture.

---

## 🛠️ Tech Stack

- **React.js** (with Vite)
- **Tailwind CSS**
- **TMDB API**
- **Axios**
- **React Router DOM**
- **Framer Motion** (optional for animation)
- **GitHub + Vercel (Deployment)**

---

## ✨ Features

✅ Responsive Netflix-style UI  
✅ Browse **Trending**, **Popular**, **Top Rated**, and **Upcoming** movies & series  
✅ **Movie Details Page** with backdrop, overview, genres, and metadata  
✅ **Horizontal Card Scroll** with smooth controls  
✅ **Search Functionality** (Movies + TV Shows)  
✅ Environment-safe API key management via `.env`  
✅ Lazy Loading + Conditional Rendering  
✅ Error Handling and Fallback UI

---

## 🧩 Folder Structure (Simplified)
movies-explorer/
├── public/
├── src/
│ ├── components/
│ │ ├── Cards.jsx
│ │ ├── Herosection.jsx
│ │ ├── MovieRow.jsx
│ │ └── Navbar.jsx
│ ├── pages/
│ │ └── Home.jsx
│ │ ├── MoviePage.jsx
│ │ ├── Search.jsx
│ │ ├── TvSeries.jsx
│ ├── App.jsx
│ ├── index.jsx
├── .env
└── README.md

---

## ⚙️ How to Run Locally

```bash
git clone https://github.com/TanmayShilimkar/movies-explorer-react-app.git
cd movies-explorer-react-app
npm install

## Create a .env file in the root directory and add your TMDB API key:
REACT_APP_TMDB_API_KEY=your_api_key_here

npm run dev
