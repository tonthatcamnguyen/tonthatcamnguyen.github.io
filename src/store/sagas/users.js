import * as api from "../../api/api";
import * as actions from "../actions/index";
import { put, call } from "redux-saga/effects";

export function* fetchUsersSaga() {
    try {
        yield put(actions.loadingUsers());
        const response = yield call(api.fetchUsers);
        yield put(actions.fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(actions.fetchUsersFailed());
    }
}