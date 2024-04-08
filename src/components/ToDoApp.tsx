import { useState } from "react";
import { TasksList } from "./TasksList";

export const ToDoApp = () => {
  // States using generics
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAppTask = () => {
    if (newTask.trim() === "") return;
    setTaskList((taskAdded) => [...taskAdded, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button onClick={handleAppTask}>Add</button>
      </div>
      <TasksList taskList={taskList} deleteTask={handleDeleteTask}></TasksList>
    </div>
  );
};
