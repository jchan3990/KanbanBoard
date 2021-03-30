import { addTask, removeTask, moveTask, editTask } from '../actions/actions.js';

export const mapStateToProps = state => {
  return {
      allTasks: state,
      todo: state.filter(task => task.status === 'todo'),
      wip: state.filter(task => task.status === 'wip'),
      finished: state.filter(task => task.status === 'finished'),
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addTask: entry => {dispatch(addTask(entry))},
    removeTask: id => {dispatch(removeTask(id))},
    moveTask: (id, status) => {dispatch(moveTask(id, status))},
    editTask: (id, entry) => {dispatch(editTask(id, entry))},
  };
};