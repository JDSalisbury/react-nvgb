import { createStore, applyMiddleware } from 'redux';
import app from "./reducers"
import thunk from 'redux-thunk';
const middleware = [thunk];
const store = createStore(app, applyMiddleware(...middleware))
export default store;