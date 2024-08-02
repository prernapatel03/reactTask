import API from "../axios/Axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { editDataFailure, editDataRequest, editDataSuccess } from "./dataSlice";


 function* editFetchData(action){
    console.log('beforeactionApi' , action)
        try {
            const EditResponse = yield call(API.patch , `/${action.payload.id}`  , action.payload);

            yield put(editDataSuccess(EditResponse.data))
        } catch (error) {
             yield put(editDataFailure(error.message))
        }
}

function* SagaEditData(){
    yield takeEvery(editDataRequest.type , editFetchData)
}
export default SagaEditData;