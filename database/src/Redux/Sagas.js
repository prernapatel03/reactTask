import { all } from "redux-saga/effects";
import SagaAddData from "./SagaAddData";
import SagaReadData from "./SagaReadData";
import SagaEditData from "./SagaEditData";
import SagaDeleteData from "./SagaDeleteData";

 function* sagas(){
    yield all([
     SagaReadData(),
     SagaAddData(),
     SagaEditData(),
     SagaDeleteData()
    ])
 }
 export default sagas