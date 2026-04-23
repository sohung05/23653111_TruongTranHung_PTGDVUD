import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoState";

function TodoInput() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  const handleAdd = () => {
    if (!text.trim()) return;

    setTodos((oldTodos) => [
      ...oldTodos,
      { id: Date.now(), text },
    ]);

    setText(" ");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;