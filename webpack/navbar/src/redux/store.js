import { createStore } from "redux";

const store = createStore(reducerFunction)

function reducerFunction(state ={ counter : 0}, action){
   if(action.type === 'Increment'){
    state = { counter : state.counter+1}
   }
   return state
}
export default store;