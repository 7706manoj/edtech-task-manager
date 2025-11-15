# 📘 EdTech Task Manager — Full Stack Application

The **EdTech Task Manager** is a full-stack, role-based task management system designed for a modern **Teacher–Student workflow**.  
Students can create and manage tasks, while Teachers can view tasks created by students assigned to them.

The system includes:
- Secure authentication  
- Authorization  
- Task CRUD operations  
- Date-based filtering  
- Clean, scalable full-stack architecture (Node.js + React)

---

## 🚀 Features

### 🔐 Authentication & Authorization
- Signup & Login (Teacher / Student)
- Secure password hashing (bcryptjs)
- JWT-based authentication
- Role-based access control (RBAC)
- Teachers **cannot edit/delete** student tasks

---

### 🧑‍🎓 Student Features
- Create tasks  
- Edit fields:  
  - Title  
  - Description  
  - Due Date  
  - Progress (not-started, in-progress, completed)  
- Delete tasks  
- View all personal tasks  
- Filter tasks by status and date  

---

### 👨‍🏫 Teacher Features
- View all assigned students  
- View tasks created by students under them  
- Cannot modify any task (strict read-only permission)  

---

## 📁 Project Structure

```plaintext
EdTech_Task_Manager/
├── server/                       # Backend (Node.js, Express, MongoDB)
│   ├── index.js
│   ├── package.json
│   ├── .env                      # Not pushed to GitHub
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│
├── client/                       # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🧩 Tech Stack

### 🖥 Frontend
- React (Vite)
- Axios
- React Router DOM

### ⚙️ Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- bcryptjs  
- JSON Web Tokens (JWT)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/7706manoj/edtech-task-manager
cd edtech-task-manager
```

---

### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create **server/.env**:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/edtech_tasks
JWT_SECRET=yourStrongSecret
```

Start backend:
```bash
npm run dev
```

Expected output:
```
MongoDB Connected
Server running on port 5000
```

---

### 3️⃣ Frontend Setup
```bash
cd ../client
npm install
```

Create **client/.env**:
```env
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Open in browser:  
👉 http://localhost:5173

---

## 📡 API Endpoints Summary

### 🔐 Authentication APIs

| Method | Endpoint        | Description                         |
|--------|------------------|-------------------------------------|
| POST   | `/auth/signup`   | Create user (Teacher / Student)     |
| POST   | `/auth/login`    | Login → returns token, role, userId |

---

### 📝 Task APIs (JWT Required)

| Method | Endpoint        | Description                         |
|--------|------------------|-------------------------------------|
| GET    | `/tasks`         | Get tasks (supports filters)         |
| POST   | `/tasks`         | Create a new task                    |
| GET    | `/tasks/:id`     | Get a single task                    |
| PUT    | `/tasks/:id`     | Update task (Student-only)           |
| DELETE | `/tasks/:id`     | Delete task (Student-only)           |

---

## 🔍 Supported Filters

| Filter Query                                      | Description                |
|--------------------------------------------------|----------------------------|
| `/tasks?due=overdue`                             | Tasks whose due date passed |
| `/tasks?due=today`                               | Tasks due today             |
| `/tasks?due=upcoming`                            | Upcoming future tasks       |
| `/tasks?dueFrom=YYYY-MM-DD&dueTo=YYYY-MM-DD`     | Filter tasks by date range  |

---

## ✨ Author

**Porendla Manoj**  
B.Tech, 2026 Batch
