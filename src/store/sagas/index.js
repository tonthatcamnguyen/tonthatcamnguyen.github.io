import { fetchUsersSaga } from "./users";
import * as actionTypes from "../actions/actionTypes";
import { all, takeEvery } from "redux-saga/effects";

export function* watchUsers() {
    yield all([takeEvery(actionTypes.FETCH_USERS, fetchUsersSaga)]);
}