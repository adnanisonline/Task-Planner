const express = require('express');
const isLogin = require('../middleware/isLogin');
const taskController = require('../controllers/taskController');
const taskValidation = require('../middleware/validations/taskValidation');
const validatorResult = require('../middleware/validations/validatorResult');
const isTaskOwner = require('../middleware/isTaskOwner');

const taskRouter = express.Router();

taskRouter
  .route('/')
  .post(isLogin, taskValidation, validatorResult, taskController.createTask)
  .get(isLogin, taskController.getAllTasks)

taskRouter
  .route('/:id')
  .get(isLogin, isTaskOwner, taskController.getTaskById)
  .patch(isLogin, isTaskOwner, taskController.updateTask)
  .delete(isLogin, isTaskOwner, taskController.deleteTask)

module.exports = taskRouter;
