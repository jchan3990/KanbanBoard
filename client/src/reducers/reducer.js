const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state,
        {
          id: action.payload.id,
          status: action.paylod.status,
          title: action.payload.title,
          task: action.payload.task,
        }
      ]

    case REMOVE_TASK:
      return state.filter(task => task.id !== action.id);

    case CHANGE_STATUS:
      return state.map(task => task.id === action.id ? {...task, status: action.status} : task);

    default:
      return state;
  }
};

export default reducer;