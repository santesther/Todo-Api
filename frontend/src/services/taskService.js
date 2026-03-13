import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const taskService = {
  getAll: (params) => api.get("/tasks", { params }),
  getById: (id) => api.get(`/tasks/${id}`),
  create: (task) => api.post("/tasks", { task }),
  update: (id, task) => api.patch(`/tasks/${id}`, { task }),
  delete: (id) => api.delete(`/tasks/${id}`),
};