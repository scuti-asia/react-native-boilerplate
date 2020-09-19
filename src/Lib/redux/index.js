
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers'

export function configureStore() {
  let composeEnhancers = compose(applyMiddleware(thunk));
  return createStore(
    rootReducer,
    composeEnhancers
  );
}

// Redux: Store
const Store = configureStore();

export default Store;
