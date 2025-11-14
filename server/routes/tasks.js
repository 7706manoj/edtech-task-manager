const express = require("express");
const Task = require("../models/Task");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = express.Router();

// GET tasks
router.get("/", auth, async (req, res) => {
    const { id, role } = req.user;

    if (role === "student") {
        const tasks = await Task.find({ userId: id });
        return res.json({ success: true, tasks });
    }

    if (role === "teacher") {
        const students = await User.find({ teacherId: id });
        const studentIds = students.map(s => s._id);

        const tasks = await Task.find({
            $or: [
                { userId: id },
                { userId: { $in: studentIds } }
            ]
        });

        return res.json({ success: true, tasks });
    }
});

// CREATE task
router.post("/", auth, async (req, res) => {
    const task = new Task({
        userId: req.user.id,
        ...req.body
    });

    await task.save();
    res.json({ success: true, task });
});

// UPDATE task
router.put("/:id", auth, async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.json({ success: false, message: "Not found" });

    if (task.userId.toString() !== req.user.id)
        return res.json({ success: false, message: "Not allowed" });

    Object.assign(task, req.body);
    await task.save();

    res.json({ success: true, task });
});

// DELETE task
router.delete("/:id", auth, async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.json({ success: false });

    if (task.userId.toString() !== req.user.id)
        return res.json({ success: false, message: "Not allowed" });

    await task.deleteOne();
    res.json({ success: true });
});

module.exports = router;
