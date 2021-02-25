const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";

let id = 0;

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      id: id++,
      status: entry.status,
      title: entry.title,
      task: entry.task,
    },
  }
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id
  }
};

export const changeStatus = (id, status) => {
  return {
    type: CHANGE_STATUS,
    id,
    status,
  }
};