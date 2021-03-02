import { addTask, removeTask, changeStatus, editTask, dragTask } from '../actions/actions.js';

export const mapStateToProps = state => {
  return {
      todo: state.filter(task => task.status === 'todo'),
      wip: state.filter(task => task.status === 'wip'),
      finished: state.filter(task => task.status === 'finished'),
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addTask: entry => {dispatch(addTask(entry))},
    removeTask: id => {dispatch(removeTask(id))},
    changeStatus: (id, status) => {dispatch(changeStatus(id, status))},
    editTask: (id, entry) => {dispatch(editTask(id, entry))},
    dragTask: (id, status) => {dispatch(dragTask(id, status))},
  };
};