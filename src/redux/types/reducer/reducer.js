import { SELL_LAPTOP } from "../types/types";

const initialState = {
  numberOfLaptops: 100,
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_LAPTOP:
      return {
        ...states,
        numberOfLaptops: state.numberOfLaptops - 1,
      };
    default:
      return state;
  }
};
