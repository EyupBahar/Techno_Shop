import { createStore, combineReducers } from "redux";
import laptopReducer from "./reducers/laptopReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
});

const store = createStore(rootReducer);

export default store;
