export function TaskFilter({ filter, onFilterChange }) {
    return (
      <div className="task-filter">
        <button
          className={filter === "" ? "active" : ""}
          onClick={() => onFilterChange("")}
        >
          Todas
        </button>
        <button
          className={filter === "false" ? "active" : ""}
          onClick={() => onFilterChange("false")}
        >
          Pendentes
        </button>
        <button
          className={filter === "true" ? "active" : ""}
          onClick={() => onFilterChange("true")}
        >
          Concluídas
        </button>
      </div>
    );
  }