const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";
const EDIT_TASK = "EDIT_TASK";

const defState = [
  {
    id: 0,
    status: 'todo',
    title: 'todo0',
    task: 'task0',
  },
  {
    id: 1,
    status: 'wip',
    title: 'todo1',
    task: 'task1',
  },
  {
    id: 3,
    status: 'finished',
    title: 'todo3',
    task: 'task3',
  },
  {
    id: 4,
    status: 'finished',
    title: 'todo4',
    task: 'task4',
  },
  {
    id: 5,
    status: 'wip',
    title: 'todo5',
    task: 'task5',
  },
  {
    id: 17,
    status: 'wip',
    title: 'todo17',
    task: 'task17',
  },
  {
    id: 23,
    status: 'todo',
    title: 'todo23',
    task: 'task23',
  },
  {
    id: 47,
    status: 'todo',
    title: 'todo47',
    task: 'task47',
  },
  {
    id: 55,
    status: 'wip',
    title: 'todo55',
    task: 'task55',
  },
  {
    id: 101,
    status: 'finished',
    title: 'todo101',
    task: 'task101',
  },
]

const reducer = (state = defState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state,
        {
          id: action.payload.id,
          status: action.payload.status,
          title: action.payload.title,
          task: action.payload.task,
        }
      ]

    case REMOVE_TASK:
      return state.filter(task => task.id !== action.id);

    case CHANGE_STATUS:
      return state.map(task => task.id === action.id ? {...task, status: action.status} : task);

    case EDIT_TASK:
      return state.map(task => task.id === action.id ? {...task, title: action.payload.title, task: action.payload.task} : task);

    default:
      return state;
  }
};

export default reducer;