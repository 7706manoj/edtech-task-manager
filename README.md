📘 EdTech Task Manager — Full Stack Application
The EdTech Task Manager is a full-stack, role-based task management system designed for a teacher–student environment.
Students can create and track their own tasks, while teachers can view the tasks of students assigned to them.
The application includes authentication, task CRUD operations, secure access control, and date-based task filtering.
This project is built as a structured full-stack application with a Node.js backend and a React (Vite) frontend.

🚀 Features
🔐 Authentication & Authorization
- Signup & login for Teacher and Student
- Password hashing with bcryptjs
- JWT-based authentication
- Role-based access control
- Teachers cannot modify student tasks
  
🧑‍🎓 Student Capabilities
- Create new tasks
- Edit task fields:
    1. Title
    2. Description
    3. Due date
    4. Progress (not-started, in-progress, completed)
- Delete tasks
- View all personal tasks
- View all personal tasks:
    1. not-started
    2. in-progress
    3. completed
     
👨‍🏫 Teacher Capabilities
- View all assigned students
- View tasks created by their students
- Cannot edit or delete any student task

🗂 Project Structure
EdTech_Task_Manager/
├── server/                       # Backend (Node.js, Express, MongoDB)
│   ├── index.js
│   ├── package.json
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
│   └── .env                      # Not pushed to GitHub
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

🧩 Tech Stack
Frontend
- React (Vite)
- Axios
- React Router DOM
Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs
- JSON Web Tokens

🔧 Setup Instructions
1. Clone Repository
   git clone https://github.com/7706manoj/edtech-task-manager
   cd edtech-task-manager
2. Backend Setup
   cd server
   npm install
   
   Create server/.env:
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/edtech_tasks
   JWT_SECRET=yourStrongSecret
   
   Start backend:
   npm run dev
   =>MongoDB Connected
     Server running on port 5000
3. Frontend Setup
   cd ../client
   npm install

   Create client/.env:
   VITE_API_URL=http://localhost:5000

   Start frontend:
   npm run dev
   Open application:
   http://localhost:5173

📡 API Endpoints Summary
🔐 Authentication
Method	     Endpoint	             Description
POST	      /auth/signup	         Register teacher or student
POST	      /auth/login	           Login → returns token, role, userId

📝 Tasks (JWT Required)
Method	            Endpoint	        Description
GET               	/tasks	          Get tasks (supports filters)
POST	              /tasks	          Create a task
GET	                /tasks/:id	      Get single task
PUT	                /tasks/:id	      Update task (student only)
DELETE	            /tasks/:id	      Delete task (student only)

🔍 Supported Filters
/tasks?due=overdue
/tasks?due=today
/tasks?due=upcoming
/tasks?dueFrom=YYYY-MM-DD&dueTo=YYYY-MM-DD

✨ Author
Porendla Manoj
B.Tech 2026 Batch





