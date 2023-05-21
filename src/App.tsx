import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
