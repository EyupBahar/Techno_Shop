import { createStore, combineReducers } from "redux";
import laptopReducer from "./reducers/laptopReducer";
import phoneReducer from "./reducers/phoneReducer";
import watchReducer from "./reducers/watchReducer";
import compReducer from "./reducers/compReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
  watch: watchReducer,
  comp: compReducer,
});

const store = createStore(rootReducer);

export default store;
