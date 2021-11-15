import React, { useCallback, useState } from "react";
import AddTodo from "./Form";
import "./todo.css";
import TodoItem from "./TodoItem";

/* Todo
 {
   id: number
   isComplete: boolean,
   title: string
 }
*/

const ToDo = () => {
  const [todos, setTodos] = useState({});
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const handleNewTodo = useCallback(
    (newTodo) => {
      setTodos({ ...todos, [newTodo.id]: newTodo });
      setIsAddingTodo(false);
    },
    [todos]
  );

  const handleToggleMarkComplete = useCallback(
    (todoId) => {
      const updatedTodo = {
        ...todos[todoId],
        isComplete: !todos[todoId].isComplete,
      };
      setTodos({
        ...todos,
        [todoId]: updatedTodo,
      });
    },
    [todos]
  );

  if (isAddingTodo) {
    return <AddTodo onComplete={handleNewTodo} />;
  }

  return (
    <section className="todo-list">
      {Object.values(todos).map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleMarkComplete={handleToggleMarkComplete}
        />
      ))}
      <button onClick={() => setIsAddingTodo(true)}>+ Add Todo</button>
    </section>
  );
};

export default ToDo;
