import { ADD_TODO, TODO_TOGGLED, TODO_REMOVED } from "../actions/todos";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const copy = [...state, action.payload];
      return copy;

    case TODO_TOGGLED:
      return {
        done: true
      };

    case TODO_REMOVED:
      const removed = [...state];
      removed.splice(action.payload, 1);
      return removed;

    default:
      return state;
  }
};

export default todos;