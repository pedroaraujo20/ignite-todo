import { MouseEvent } from "react";
import { Trash, CheckCircle } from "@phosphor-icons/react";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  isDone: boolean;
  content: string;
  onDeleteTodo: (content: string) => void;
  onTodoClick: (content: string) => void;
}

export function TodoItem({
  isDone,
  content,
  onDeleteTodo,
  onTodoClick,
}: TodoItemProps) {
  function handleDeleteTodo(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onDeleteTodo(content);
  }

  function handleTodoClick(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    onTodoClick(content);
  }

  return (
    <div className={styles.item} onClick={handleTodoClick}>
      <div className={styles.content}>
        {isDone ? <CheckCircle size={24} /> : <div className={styles.check} />}
        <span className={isDone ? styles.doneText : styles.text}>
          {content}
        </span>
      </div>

      <button onClick={handleDeleteTodo}>
        <Trash size={24} />
      </button>
    </div>
  );
}
