const Task = require('../models/task');

exports.getAllTasks = async (req, res, next) => {
  try {
    const userId = req.userId;

    const tasks = await Task.find({ userId });
    
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};


exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const userId = req.userId;

    const newTask = new Task({ title, description, userId });
    const savedTask = await newTask.save();
    
    res.status(201).json(savedTask);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndRemove(req.params.id);
    
    res.status(200).json(deletedTask);
  } catch (error) {
    next(error);
  }
};
