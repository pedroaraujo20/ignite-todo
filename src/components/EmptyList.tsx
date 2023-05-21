import emptyListIcon from "../assets/clipboard.svg";
import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={emptyListIcon} />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
