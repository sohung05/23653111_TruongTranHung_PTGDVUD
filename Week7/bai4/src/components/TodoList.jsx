import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/todoState";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useRecoilValue(todoListState);

  return (
    <div>
      <h3>Todo List</h3>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;