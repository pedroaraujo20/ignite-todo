import styles from "./TodoListHeader.module.css";

interface TodoListHeader {
  todosTotal: number;
  doneTodos: number;
}

export function TodoListHeader({ todosTotal, doneTodos }: TodoListHeader) {
  return (
    <>
      <header className={styles.header}>
        <div>
          <strong className={styles.tasksText}>Tarefas criadas</strong>
          <div className={styles.circledContent}>{todosTotal}</div>
        </div>

        <div>
          <strong className={styles.concludedText}>Concluídas</strong>
          <div
            className={styles.circledContent}
          >{`${doneTodos} de ${todosTotal}`}</div>
        </div>
      </header>

      {!todosTotal ? <div className={styles.divider} /> : null}
    </>
  );
}
