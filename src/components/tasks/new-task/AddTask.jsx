import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../../../context/context-tasks";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [chk, setChk] = useState(false);

  const { dispatch } = useContext(TasksContext);

  const notify = () => toast.success(" 🚀 Successfully Created Task ", {position: "bottom-right"});

  const newTaskHandler = (event) => {
    event.preventDefault();

    dispatch({type: 'ADD_NEW_TASK', task: {
        id: uuidv4(),
        text,
        timeZone: time,
        reminder: chk,
    }})

    // reset
    setText("");
    setTime("");
    setChk(false);

    notify();
  };

  return (
    <form className="add-form" onSubmit={newTaskHandler}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className=" form-control-check">
        <input
          type="checkbox"
          checked={chk}
          onChange={() => setChk((prevState) => !prevState)}
        />
        <label>Set Reminder</label>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
      <ToastContainer />
    </form>
  );
};

export default AddTask;
