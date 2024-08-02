import API from "../axios/Axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { readFailureFunction, readLoadFunction, readSuccessFunction } from "./dataSlice";

 function* readFetchData(){
        try {
            const response = yield call(API.get , '/');
            yield put(readSuccessFunction(response.data))
        } catch (error){
             yield put(readFailureFunction(error.message))
        }
}

function* SagaReadData(){
    yield takeEvery(readLoadFunction.type , readFetchData)
}
export default SagaReadData;