const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const CHANGE_STATUS = "CHANGE_STATUS";
const EDIT_TASK = "EDIT_TASK";

const defState = [
  {
    id: 0,
    status: 'todo',
    title: 'Add Drag Tasks',
    task: 'Use the drag synthetic events to make cards draggable.',
  },
  {
    id: 1,
    status: 'wip',
    title: 'Updating dummy tasks',
    task: 'Change tasks to look like actual tasks.',
  },
  {
    id: 3,
    status: 'finished',
    title: 'Basic Layout',
    task: 'Make the board look like a real usable kanban board.',
  },
  {
    id: 4,
    status: 'finished',
    title: 'Allow Adding Cards',
    task: 'Add button at top of each column to allow users to create new task cards.',
  },
  {
    id: 5,
    status: 'wip',
    title: 'Finalize CSS',
    task: 'Add final CSS touches to make sure styling is consistent and robust.',
  },
  {
    id: 17,
    status: 'wip',
    title: 'Better Title',
    task: 'Come up with a better title for the board.',
  },
  {
    id: 23,
    status: 'todo',
    title: 'Deploy on AWS',
    task: 'Deploy service on an AWS EC2 Instance.',
  },
  {
    id: 47,
    status: 'todo',
    title: 'The same thing we do every night...',
    task: 'Try to TAKE OVER THE WORLD.',
  },
  {
    id: 55,
    status: 'wip',
    title: 'Watch Wandivision',
    task: 'Catch up on the latest version of WandaVision. Show be gettin\' reeeaaallll gooooood.',
  },
  {
    id: 101,
    status: 'finished',
    title: 'Blast Glutes',
    task: 'Nothing better than a nice rump pump :D.',
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