📘 EdTech Task Manager — Full Stack Application

A role-based EdTech Task Manager where Teachers and Students interact.
Students can create and manage tasks. Teachers can view student tasks but cannot edit or delete them.

This project is developed as part of the Digit IT Solutions Internship Take-Home Assignment.

🚀 Features Overview
🔐 Authentication

Signup / Login for both Teacher and Student

Password hashing using bcrypt

Secure authentication using JWT

Role-based access control (Teacher / Student)

🧑‍🎓 Student Features

Create tasks

Update task fields:

title

description

due date

progress (not-started, in-progress, completed)

Delete tasks

View all own tasks

Filter tasks based on:

Overdue

Today

Upcoming

Between specific date ranges

👨‍🏫 Teacher Features

View all students assigned to them

View all student tasks

Cannot edit or delete student tasks (strict ownership rule)

📅 Task Fields

title

description

dueDate

progress

createdAt

userId

🏛 Project Structure
EdTech-Task-Manager/
│
├── server/                  # Backend (Node.js, Express, MongoDB)
│   ├── index.js
│   ├── .env
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
│   └── package.json
│
├── client/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   └── components/...
│   ├── .env
│   └── package.json
│
└── README.md                # ← This file

⚙️ Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

bcryptjs

jsonwebtoken

Frontend

React (Vite)

Axios

React Router DOM

🔧 Setup & Installation
1️⃣ Clone the repository
git clone <repo-url>
cd EdTech-Task-Manager

2️⃣ Server Setup
cd server
npm install


Create .env inside server:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/digitit_tasks
JWT_SECRET=yourStrongSecret


Start backend:

npm run dev


Expected output:

MongoDB Connected
Server running on port 5000

3️⃣ Client Setup
cd client
npm install


Create .env inside client:

VITE_API_URL=http://localhost:5000


Start frontend:

npm run dev


Open browser at:

http://localhost:5173

🔑 Demo Accounts
👨‍🏫 Teacher
email: testteacher@example.com
password: pass123

🧑‍🎓 Student
email: student1@example.com
password: pass123
teacherId: <paste teacher's userId here>


Get teacher's userId:

mongosh --eval "db.getSiblingDB('digitit_tasks').users.find().pretty()"

📡 API Endpoints Summary
Auth APIs
POST /auth/signup

Signup (Teacher or Student)

POST /auth/login

Login → returns { token, role, userId }

Task APIs (JWT Required)
POST /tasks

Create a task

GET /tasks

Get tasks
Supported filters:

due=overdue

dueFrom=YYYY-MM-DD

dueTo=YYYY-MM-DD

GET /tasks/:id

Get single task

PUT /tasks/:id

Update task
(Only student owner allowed)

DELETE /tasks/:id

Delete task
(Only student owner allowed)

🎥 Demo Video Checklist (Required for Submission)

In the 4–7 minute demo video, show:

✔ 1. Start backend → show “MongoDB Connected”
✔ 2. Signup Teacher
✔ 3. Copy Teacher userId from DB
✔ 4. Signup Student (paste teacherId)
✔ 5. Login Student → show dashboard
✔ 6. Create tasks (normal + overdue)
✔ 7. Update task progress
✔ 8. Apply filters (Overdue / Today / Upcoming)
✔ 9. Login Teacher → view student tasks
✔ 10. Teacher attempts edit → gets “Not allowed”
✔ 11. Show code (auth.js, tasks.js, models)
✔ 12. End with GitHub repo link
📌 Important Notes
❗ Do NOT push .env to GitHub
❗ Remove helper debug scripts before submission

verifyPassword.js

deleteUser.js

checkUsers.js

❗ Only necessary logs should remain

MongoDB Connected

Server running on port 5000

🎯 Project Status

Backend API — ✔ complete

Frontend UI — ✔ working

Auth + Role System — ✔ working

Task CRUD — ✔ working

Date filters — ✔ working

Teacher constraints — ✔ working

Debug scripts removed — ✔

Ready for submission — ✔🎉

🙌 Developed By

Porendla Manoj
B.Tech 2026 Batch
