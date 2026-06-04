import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Statistics() {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const uncompleted = total - completed;

  return (
    <div>
      <p>Всього: {total}</p>
      <p>Виконано: {completed}</p>
      <p>Не виконано: {uncompleted}</p>
    </div>
  );
}