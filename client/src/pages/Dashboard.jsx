import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [loading, setLoading] = useState(false);
  const role = localStorage.getItem("role") || "";

  const loadTasks = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/tasks");
      if (data?.success) setTasks(data.tasks || []);
      else {
        alert(data?.message || "Failed to load tasks");
        setTasks([]);
      }
    } catch (err) {
      console.error("Error loading tasks:", err);
      alert("Error loading tasks (see console)");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaved = () => {
    setEditing(null);
    setShowCreate(false);
    loadTasks(); // refresh after create/update
  };

  const handleEdit = (t) => {
    setEditing(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      const { data } = await api.delete(`/tasks/${id}`);
      if (data?.success) loadTasks();
      else alert(data?.message || "Not allowed to delete this task");
    } catch (err) {
      console.error("Error deleting task:", err);
      alert(err.response?.data?.message || "Error deleting task (see console)");
    }
  };

  return (
    <div>
      <h2>Dashboard {role ? `(${role})` : ""}</h2>

      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => {
            setShowCreate((s) => !s);
            setEditing(null);
          }}
        >
          {showCreate ? "Close" : "Add Task"}
        </button>
      </div>

      {showCreate && <TaskForm onSaved={handleSaved} />}

      {editing && (
        <div>
          <h3>Editing task</h3>
          <TaskForm initial={editing} onSaved={handleSaved} />
        </div>
      )}

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <div className="tasks-grid">
          {tasks.map((t) => (
            <TaskCard key={t._id} task={t} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
