# 🏃 Smart Jogger

**Smart Jogger** is a responsive React web app designed to track jogging paths using Geolocation, draw real-time routes on a canvas, and automatically pause/resume tracking based on user visibility — simulating real-life jogging behavior.

---

## 📌 Features

- 📍 **Live Jog Tracking** using device GPS (Geolocation API)
- 🖼️ **Real-Time Route Drawing** on a Canvas (Canvas API)
- 👁️ **Auto Pause/Resume** when the stats panel enters the screen (Intersection Observer API)
- 📶 Displays user's **Network Type** (Network Information API)
- 🧠 Optimized for both desktop and mobile devices (responsive layout)

---

## 🌐 Live Demo

>(https://smart-jogger.vercel.app/)  

---

## 🔧 Tech Stack

- React (via Create React App)
- HTML5 Canvas
- Web APIs (Geolocation, Canvas, Intersection Observer, Network Info)
- CSS (fully responsive design)

---

## 🚀 Web APIs Used

| API                          | Purpose                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| 📍 [Geolocation API]         | Tracks the user’s current latitude and longitude                        |
| 🖼️ [Canvas API]              | Draws the user’s jogging path in real-time                              |
| 👁️ [Intersection Observer]  | Detects visibility of stats panel to simulate auto-pause/resume         |
| 📶 [Network Information API] | Displays user's connection type (e.g., 4g, wifi) *(optional feature)*  |

---

## 📱 Responsive Design

- Works on mobile, tablet, and desktop
- Canvas scales based on screen width
- Button UI optimized for touch interaction

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vishnuemail96/Smart-Jogger.git
   cd Smart-Jogger/smart-jogger
