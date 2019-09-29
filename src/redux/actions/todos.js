

export const ADD_TODO = "[todos] addTodo";
export const ADD_TODO_ERROR = "[todos] todoError";
// export const TODO_TOGGLED = "[todos] toggled";
// export const TODO_REMOVED = "[todos] todo removed";

// export const add = payload => {
//   return ( 
//     {
//     type: ADD_TODO,
//     payload
//   });
// };

export const add = (accounts) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('accounts').add({ 
      ...accounts,
     }).then(() =>{
       dispatch ({ type: ADD_TODO, accounts });
     }).catch((err) => {
       dispatch({ type: ADD_TODO_ERROR, err })
     })
  }
}

// export const toggled = () => {
//   return {
//     type: TODO_TOGGLED
//   };
// };

// export const remove = payload => {
//   return {
//     type: TODO_REMOVED,
//     payload
//   };
// };
