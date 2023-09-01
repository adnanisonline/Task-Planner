import axiosInstance from './axiosInstance'; // Import the axiosInstance

// Fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await axiosInstance.get('/tasks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch a single task by ID
export const fetchTaskById = async (taskId) => {
  try {
    const response = await axiosInstance.get(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new task
export const createTask = async (taskData) => {
  try {
    const response = await axiosInstance.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an existing task
export const updateTask = async (taskId, taskData) => {
  try {
    const response = await axiosInstance.patch(`/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a task by ID
export const deleteTask = async (taskId) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
