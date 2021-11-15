import React, { useCallback } from "react";

export default function TodoItem({
  id,
  title,
  isComplete,
  toggleMarkComplete,
}) {
  const handleMarkComplete = useCallback(() => {
    if (!toggleMarkComplete || typeof toggleMarkComplete !== "function") return;

    toggleMarkComplete(id);
  }, [id, toggleMarkComplete]);
  return (
    <article className="todo-item">
      <input
        id={id}
        type="checkbox"
        checked={isComplete}
        onChange={handleMarkComplete}
      />
      <label htmlFor={id}>
        <h2>{title}</h2>
      </label>
    </article>
  );
}
