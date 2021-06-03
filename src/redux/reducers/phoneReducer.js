import { SELL_PHONE } from "../types/types";

const initialState = {
  numberOfPhones: 500,
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_PHONE:
      return {
        ...state,
        numberOfPhones: state.numberOfPhones - 1,
      };

    default:
      return state;
  }
};

export default phoneReducer;
