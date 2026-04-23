import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoState";

function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleUpdate = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: newText } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;