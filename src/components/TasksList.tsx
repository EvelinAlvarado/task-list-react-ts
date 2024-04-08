import { Task } from "./Task";

type TasksListProps = {
  taskList: string[];
  deleteTask: (index: number) => void;
};

export const TasksList = ({ taskList, deleteTask }: TasksListProps) => {
  return (
    <div className="taskList">
      {taskList.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
        ></Task>
      ))}
    </div>
  );
};
