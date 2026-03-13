import { useState } from "react";

export function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 3) {
      setError("Título deve ter pelo menos 3 caracteres");
      return;
    }
    onSubmit(title);
    setTitle("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova task..."
      />
      <button type="submit">Adicionar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}