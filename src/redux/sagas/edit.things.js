import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editThing(action) {
    try{
        const thingToEdit = yield axios.get(`/api/shelf/${action.payload}`)
        yield put({
            type: 'THING_TO_EDIT',
            payload: thingToEdit
        })
    } catch {
        console.log("Something went wrong with the editThing saga");
    }
}

function* sagaEditThing() {
    yield takeLatest('SAGA/EDIT_THINGS', editThing)
}

export default sagaEditThing;