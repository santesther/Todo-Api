import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { TaskItem } from "./components/TaskItem";
import { TaskFilter } from "./components/TaskFilter";
import "./App.css";

function App() {
  const { tasks, loading, error, filter, setFilter, createTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="container">
      <h1>📝 Todo List</h1>

      <TaskForm onSubmit={createTask} />

      <TaskFilter filter={filter} onFilterChange={setFilter} />

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="loading">Carregando...</p>
      ) : tasks.length === 0 ? (
        <p className="empty">Nenhuma task encontrada!</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;