const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";
const EDIT_TASK = "EDIT_TASK";

let id = 102;

export const addTask = (entry) => {
  console.log(entry);
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

export const editTask = (id, entry) => {
  return {
    type: EDIT_TASK,
    id,
    payload: {
      title: entry.title,
      task: entry.task,
    }
  }
}