import { put, takeLatest, call } from 'redux-saga/effects';
import actionTypes from '../actions/types';
import { HomeData } from '../../Api';
import { landingPageDataSuccess, landingPageDataError } from '../actions';

function* fetchLandingPageDataAsync() {
    try {
        const response = yield call(HomeData.fetchHomeData);
        const { data } = response;
        console.log("show the redux saga =>", data);
        yield put(landingPageDataSuccess(data));
    } catch (error) {
        yield put(landingPageDataError());
    }
}

export default function* rootSaga() {
     yield takeLatest(actionTypes.LANDING_PAGE_DATA_START, fetchLandingPageDataAsync);
}
