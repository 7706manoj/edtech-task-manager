import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p><b>Progress:</b> {task.progress}</p>
      {task.dueDate && <p><b>Due:</b> {new Date(task.dueDate).toLocaleDateString()}</p>}
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}
