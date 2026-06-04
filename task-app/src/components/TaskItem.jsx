import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div>
      <span style={{
        textDecoration: task.completed ? "line-through" : "none"
      }}>
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>✔</button>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}