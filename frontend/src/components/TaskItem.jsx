export function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div className={`task-item ${task.done ? "done" : ""}`}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id, task.done)}
        />
        <span className="task-title">{task.title}</span>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          ✕
        </button>
      </div>
    );
  }