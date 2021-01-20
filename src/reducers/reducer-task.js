export const TaskReducers = (state, action) => {
  switch (action.type) {
    case "POPULATE_ALL_TASKS":
      return state;

    case "ADD_NEW_TASK":
      return [
        ...state,
        {
          id: action.task.id,
          text: action.task.text,
          day: action.task.timeZone,
          reminder: action.task.reminder,
        },
      ];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.taskId);

    case "TOGGLE_TASK_REMINDER":
      return state.map((task) => {
        if (task.id === action.taskId) {
          return {
            ...task,
            reminder: !task.reminder,
          };
        }
        return task;
      });

    default:
      return state;
  }
};
