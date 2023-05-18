import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchThings() {
    try{
        const things = yield axios.get('/api/shelf')
        console.log("here are our things:", things.data);
        yield put({
            type: 'SET_THINGS', payload: things.data
        })
    } catch{
        console.log("Error connecting to server, couldn't get our things");
    }
}
function* sagaFetchThings() {
    yield takeLatest('SAGA/FETCH_THINGS', fetchThings)
}
export default sagaFetchThings;