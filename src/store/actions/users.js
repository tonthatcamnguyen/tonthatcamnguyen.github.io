import * as actionTypes from './actionTypes';

export const fetchUsers = () => ({
    type: actionTypes.FETCH_USERS,
});

export const fetchUsersFailed = () => ({
    type: actionTypes.FETCH_USERS_FAILURE,
});

export const fetchUsersSuccess = (users) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    users,
});

export const approveUsers = () => ({
    type: actionTypes.APPROVE_USERS,
});

export const rejectUsers = () => ({
    type: actionTypes.REJECT_USERS,
});

export const loadingUsers = () => ({
    type: actionTypes.LOADING_USERS,
});