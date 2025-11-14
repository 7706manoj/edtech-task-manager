import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "", role: "student", teacherId: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // simple way to load teachers for the teacherId field
    async function loadTeachers() {
      try {
        // If you had an endpoint to list teachers, use that. For now we will not call protected API.
        // Instead, let user paste teacherId manually. (You can add an admin endpoint later)
      } catch (err) {
        console.error(err);
      }
    }
    loadTeachers();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.role === "student" && !form.teacherId) {
        return alert("Student must provide teacherId (paste teacher's userId)");
      }
      const { data } = await api.post("/auth/signup", {
        email: form.email,
        password: form.password,
        role: form.role,
        teacherId: form.role === "student" ? form.teacherId : undefined,
      });
      if (data.success) {
        alert("Signup successful, please login");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="card">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email
          <input name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Password
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </label>
        <label>Role
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
        {form.role === "student" && (
          <label>Teacher ID (paste teacher's userId)
            <input name="teacherId" value={form.teacherId} onChange={handleChange} required />
          </label>
        )}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
