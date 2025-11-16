import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {

  // Format function added here
  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;  // <-- Date format here
  };

  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p><b>Progress:</b> {task.progress}</p>

      {task.dueDate && (
        <p>
          <b>Due:</b> {formatDate(task.dueDate)}
        </p>
      )}

      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}
