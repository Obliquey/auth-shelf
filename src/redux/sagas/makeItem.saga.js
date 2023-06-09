import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* makeItem(action) {
    try{
    
        const dbResponse = yield axios.post('/api/shelf', action.payload) 
        console.log("Did we get our request item?", action.payload);
        // const res = yield axios.post('/api/shelf', action.payload)
        yield put({type: 'SAGA/FETCH_THINGS'})
    } catch{

    }
}

function* sagaMakeItem() {
    yield takeLatest('SAGA/ADD_THINGS', makeItem)
}
export default sagaMakeItem;