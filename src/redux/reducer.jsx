import {
  ADD_ITEM,
  DELETE_ITEM,
  RESET_LIST,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [
          ...state.wishList,
          action.payload
        ],
      };
      
    case DELETE_ITEM:
      return {
        wishList: state.wishList.filter((item) => item !== action.payload),
      };
    case RESET_LIST: 
      {return INITIAL_STATE}

    default:
      return {
        wishList: state.wishList,
      };
  }
};

export default reducer;