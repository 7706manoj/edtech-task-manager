import React, { useState } from "react";
import api from "../api/axios";

export default function TaskForm({ onSaved, initial = {} }) {
  const [form, setForm] = useState({
    title: initial.title || "",
    description: initial.description || "",
    dueDate: initial.dueDate ? new Date(initial.dueDate).toISOString().slice(0,10) : "",
    progress: initial.progress || "not-started",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initial._id) {
        // update
        const { data } = await api.put(`/tasks/${initial._id}`, {
          title: form.title,
          description: form.description,
          dueDate: form.dueDate || null,
          progress: form.progress
        });
        if (data.success) onSaved(data.task);
      } else {
        // create
        const { data } = await api.post("/tasks", {
          title: form.title,
          description: form.description,
          dueDate: form.dueDate || null,
          progress: form.progress
        });
        if (data.success) onSaved(data.task);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error saving task");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="dueDate" type="date" value={form.dueDate} onChange={handleChange} />
      <select name="progress" value={form.progress} onChange={handleChange}>
        <option value="not-started">Not started</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">{initial._id ? "Update" : "Create"}</button>
    </form>
  );
}
