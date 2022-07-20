import { combineReducers } from "redux";

import productsReducer from "./products/productsReduer";

const rootReducer = combineReducers({
  productsState: productsReducer,
});

export default rootReducer;
