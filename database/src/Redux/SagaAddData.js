import API from "../axios/Axios";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import { postDataFailure, postDataRequest, postDataSuccess } from "./dataSlice";


 function* postFetchData(action){
    // console.log('beforereadFetchData', action)
    
        try {
    //   console.log('readFetchData', action)

            const AddResponse = yield call(API.post , '/'  , action.payload);


            yield put(postDataSuccess(AddResponse.data))
        } catch (error) {
             yield put(postDataFailure(error.message))
        }
}

function* SagaAddData(){
    yield takeEvery(postDataRequest.type , postFetchData)
}
export default SagaAddData;