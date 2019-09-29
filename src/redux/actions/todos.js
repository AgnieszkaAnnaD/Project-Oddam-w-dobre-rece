export const ADD_TODO = "[todos] addTodo";
export const TODO_TOGGLED = "[todos] toggled";
export const TODO_REMOVED = "[todos] todo removed";

export const add = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};

export const toggled = () => {
  return {
    type: TODO_TOGGLED
  };
};

export const remove = payload => {
  return {
    type: TODO_REMOVED,
    payload
  };
};
