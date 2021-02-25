export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RESET_LIST = 'RESET_LIST';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

// to reset the list after submittion
export const resetList = () => {
  return {
    type: RESET_LIST
  }
}