import React, { useContext } from "react";
import Task from "./task/Task";
import { AnimatePresence } from "framer-motion";
import { TasksContext } from "../../context/context-tasks";

const Tasks = (props) => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <AnimatePresence>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </AnimatePresence>

      {tasks.length === 0 && <strong>No task found</strong>}
    </>
  );
};

export default Tasks;
