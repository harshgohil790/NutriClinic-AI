# 🥗 NutriClinic

An Dietitian Clinic Management System built using the **MERN Stack**. NutriClinic helps dietitians efficiently manage patients, appointments, and personalized meal plans through a modern, user-friendly web application.

> 🚀 **Live Demo:** https://nutriclinic007.vercel.app

---

## 📖 About

NutriClinic is designed to simplify the daily workflow of dietitians by providing a centralized platform to manage clinic operations digitally. The current version focuses on patient management, appointment scheduling, authentication, and meal plan management.

---

## ✨ Features

### 🔐 Authentication
- Secure Dietitian Login
- JWT Authentication
- Protected Routes
- Persistent Login using Auth Context

### 📊 Dashboard
- Personalized dashboard
- Overview of clinic information
- Quick navigation to different modules

### 👥 Patient Management
- Add new patients
- View all patients
- Update patient details
- Delete patient records

### 📅 Appointment Management
- Schedule appointments
- View appointment list
- Update appointment details
- Delete appointments

### 🥗 Meal Plan Management
- Create customized meal plans
- View existing meal plans
- Edit meal plans
- Delete meal plans

### 🎨 Modern UI
- Responsive React interface
- Clean dashboard layout
- User-friendly navigation

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Deployment
- Frontend: Vercel
- Backend: Render *(Deployment in progress / Backend hosted separately)*
- Database: MongoDB Atlas

---

## 📂 Project Structure

```
NutriClinic-AI
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/harshgohil790/NutriClinic-AI.git
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=8000

MONGO_URI=mongodb+srv://Harsh:Welcomee123@cluster0.vsjun58.mongodb.net/?appName=Cluster0

JWT_SECRET=NutriClinic@123
```

---


## 🎯 Future Enhancements

- 🤖 AI-generated personalized meal plans
- 📈 Patient progress analytics
- 🍎 Calorie and nutrition tracking
- 📊 Interactive health dashboard
- 📱 Mobile responsive improvements
- 📹 Video consultation
- 📄 PDF meal plan generation
- 📧 Email reminders
- 🔔 Appointment notifications

---

## 🌐 Live Application

👉 **Frontend:** https://nutriclinic007.vercel.app

---

## 👨‍💻 Author

**Harsh Gohil**

## ⭐ If you like this project

Please consider giving the repository a **⭐ Star**. It helps support the project and motivates future development.

---

## 📜 License

This project is developed for educational and portfolio purposes.
