import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
});

// initial state - toda la data que vamos a meter en ese state - //!cart information - no
let initialState = {};

// data de middleware
const Middleware = [thunk];

//hostias
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
