import { put, takeLatest, all, call } from 'redux-saga/effects';
import actionTypes from '../action/types';
import { HomeData } from '../API/service';
import { landingPageDataSuccess, landingPageDataError } from '../action';

function* watchLandingPageData() {
    yield takeLatest(
        actionTypes.LANDING_PAGE_DATA_START,
        fetchLandingPageDataAsync
    )
}

function* fetchLandingPageDataAsync() {
    try {
        const response = yield call(HomeData.fetchHomeData);
        const { data } = response;
        console.log("home page data data =>", data);
        yield put(landingPageDataSuccess(data));
    } catch (error) {
        yield put(landingPageDataError());
    }
}

export default function* rootSaga() {
    yield all([
        watchLandingPageData()
    ]);
}
