import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import createSagaMiddleware from 'redux-saga'
import sagas  from "./Sagas";
 
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  dataSlice : dataSlice
})
const reduxStore = configureStore({
  reducer : rootReducer, 
  middleware : (middleware)=>middleware({thunk : false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas)
export default reduxStore;
