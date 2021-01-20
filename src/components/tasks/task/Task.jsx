import React, { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { TasksContext } from "../../../context/context-tasks";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ id, text, day, reminder }) => {
  const { dispatch } = useContext(TasksContext);
  
  
  const deleteTaskHandler = () => {
    dispatch({ type: "DELETE_TASK", taskId: id });
    toast(" 🚀 Successfully deleted your task ", { position: "bottom-right"});
  }

  const toggleTaskHandler = () => {
    dispatch({ type: "TOGGLE_TASK_REMINDER", taskId: id })
    toast.dark(" 🚀 Successfully Updated your Task", { position: "bottom-right"});
  }

  return (
    <motion.div
      className={`task ${reminder && "reminder"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onDoubleClick={toggleTaskHandler}
    >
      <h3>
        {text}
        <FaRegTimesCircle
          style={{ fill: "#333", cursor: "pointer" }}
          onClick={deleteTaskHandler}
        />
      </h3>
      <p> {day} </p>
      <ToastContainer />
    </motion.div>
  );
};

Task.propTypes = {
  text: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  reminder: PropTypes.bool.isRequired,
};

export default Task;
