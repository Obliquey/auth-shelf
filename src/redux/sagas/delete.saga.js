import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem (action) {
    try{
        console.log("In saga deleteItem, got the request:", action.payload)
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({type: 'SAGA/FETCH_THINGS'})
    } catch {
        console.log("Couldn't connect with server in delete.saga");
    }
}

function* sagaDeleteItem() {
    yield takeLatest('SAGA/DELETE_THINGS', deleteItem)
}
export default sagaDeleteItem;