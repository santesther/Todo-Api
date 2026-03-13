import { useState, useEffect } from "react";
import { taskService } from "../services/taskService";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  async function fetchTasks() {
    setLoading(true);
    try {
      const params = filter !== "" ? { done: filter } : {};
      const response = await taskService.getAll(params);
      setTasks(response.data.tasks);
    } catch (err) {
      setError("Erro ao carregar tasks");
    } finally {
      setLoading(false);
    }
  }

  async function createTask(title) {
    try {
      const response = await taskService.create({ title });
      setTasks((prev) => [response.data, ...prev]);
    } catch (err) {
      setError("Erro ao criar task");
    }
  }

  async function toggleTask(id, done) {
    try {
      const response = await taskService.update(id, { done: !done });
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? response.data : task))
      );
    } catch (err) {
      setError("Erro ao atualizar task");
    }
  }

  async function deleteTask(id) {
    try {
      await taskService.delete(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError("Erro ao deletar task");
    }
  }

  return {
    tasks,
    loading,
    error,
    filter,
    setFilter,
    createTask,
    toggleTask,
    deleteTask,
  };
}