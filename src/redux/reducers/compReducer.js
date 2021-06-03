import { SELL_COMP } from "../types/types";

const initialState = {
  numberOfComp: 250,
};

const compReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_COMP:
      return {
        ...state,
        numberOfComp: state.numberOfComp - action.payload,
      };

    default:
      return state;
  }
};

export default compReducer;
