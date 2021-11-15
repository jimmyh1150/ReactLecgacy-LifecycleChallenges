import React, { useCallback, useState } from "react";

const createTodo = (title) => ({
  title,
  isComplete: false,
  id: new Date().valueOf(),
});

export default function AddTodo({ onComplete }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title) {
        setError("Todo title is required.");
        return;
      }
      onComplete(createTodo(title));
    },
    [title]
  );

  const handleTitleChange = useCallback(
    (e) => {
      setTitle(e.target.value);
      setError("");
    },
    [setTitle, setError]
  );

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        value={title}
        name="title"
        type="text"
        onChange={handleTitleChange}
      />
      {error && <p className="todo-error">{error}</p>}
      <button type="submit">Add</button>
    </form>
  );
}
