import { SELL_LAPTOP } from "../types/types";

const initialState = {
  numberOfLaptops: 100,
};

const laptopReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELL_LAPTOP:
      return {
        ...state,
        numberOfLaptops: state.numberOfLaptops - 1,
      };

    default:
      return state;
  }
};

export default laptopReducers;
