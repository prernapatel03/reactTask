import API from "../axios/Axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  deleteDataFailure,
  deleteDataRequest,
  deleteDataSuccess,
} from "./dataSlice";
function* deleteFetchData(action) {
  console.log(action)
  try {
    const deleteResponse = yield call(API.delete, `/${action.payload}`, action);
    yield put(deleteDataSuccess(action.payload));
  } catch (error) {
    yield put(deleteDataFailure(error.message));
  }
}

function* SagaDeleteData() {
  yield takeEvery(deleteDataRequest.type, deleteFetchData);
}
export default SagaDeleteData;
