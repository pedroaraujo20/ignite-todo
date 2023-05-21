import { ChangeEvent, FormEvent, useState, InvalidEvent } from "react";
import styles from "./TodoList.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { TodoItem } from "./TodoItem";
import { TodoListHeader } from "./TodoListHeader";
import { EmptyList } from "./EmptyList";

interface TodoList {
  isDone: boolean;
  content: string;
}

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  function handleTodoChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setTodo(e.target.value);
  }

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();
    const newTodo = { isDone: false, content: todo };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  }

  function handleTodoInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório");
  }

  function onDeleteTodo(content: string) {
    const todoListAfterDelete = todoList.filter(
      (todo) => todo.content !== content
    );
    setTodoList(todoListAfterDelete);
  }

  function onTodoClick(content: string) {
    const updatedTodoList = [...todoList];
    const selectedTodoItemIndex = updatedTodoList.findIndex(
      (todo) => todo.content === content
    );
    updatedTodoList[selectedTodoItemIndex].isDone = true;
    setTodoList(updatedTodoList);
  }

  return (
    <div className={styles.content}>
      <form onSubmit={handleAddTodo}>
        <input
          value={todo}
          onChange={handleTodoChange}
          placeholder="Adicione uma nova tarefa"
          type="text"
          onInvalid={handleTodoInvalid}
          required
        />

        <button type="submit" disabled={!todo}>
          Criar
          <PlusCircle />
        </button>
      </form>

      <div className={styles.todoList}>
        <TodoListHeader
          todosTotal={todoList.length}
          doneTodos={todoList.filter((todo) => todo.isDone).length}
        />

        {!todoList.length ? (
          <EmptyList />
        ) : (
          todoList.map((todo) => (
            <TodoItem
              key={todo.content}
              isDone={todo.isDone}
              content={todo.content}
              onDeleteTodo={onDeleteTodo}
              onTodoClick={onTodoClick}
            />
          ))
        )}
      </div>
    </div>
  );
}
