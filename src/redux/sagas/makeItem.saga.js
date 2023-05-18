import { takeLatest } from "redux-saga/effects";

function* makeItem(action) {
    try{
        console.log("Did we get our request item?", action.payload);
        // const res = yield axios.post('/api/shelf', action.payload)
    } catch{

    }
}

function* sagaMakeItem() {
    yield takeLatest('SAGA/ADD_THINGS', makeItem)
}
export default sagaMakeItem;