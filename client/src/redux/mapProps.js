import { addTask, removeTask, changeStatus } from '../actions/actions.js';

export const mapStateToProps = state => {
  return {
    todo: state.filter(task => task.status === 'todo'),
    wip: state.filter(task => task.status === 'wip'),
    finished: state.filter(task => task.status === 'finished'),
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addTask: task => {dispatch(addTask(task))},
    removeTask: id => {dispatch(removeTask(id))},
    changeStatus: (id, status) => {dispatch(changeStatus(id, status))},
  }
},