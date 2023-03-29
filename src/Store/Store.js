import { createStore } from "redux";
import Rducer from './CombineReducers';

const devToolExtention =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(Rducer, devToolExtention)
export default store;