import React, { useReducer, createContext, useEffect } from "react";
import { TaskReducers } from "../reducers/reducer-task";

export const TasksContext = createContext();

export const GlobalContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducers, [], () => {
    if (window.localStorage.length) {
      return JSON.parse(window.localStorage.getItem("tasks"));
    }
  });

  useEffect(() => {
    // => set Items into Local Storage
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  );
};
