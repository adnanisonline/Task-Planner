const Task = require('../models/task');

const isTaskOwner = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const userId = req.userId;

    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isTaskOwner;
