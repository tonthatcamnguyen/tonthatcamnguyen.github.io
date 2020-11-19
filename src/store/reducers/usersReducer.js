import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtils';

const initialState = {
    users: [],
    filteredUsers: [],
    approveUsers: false,
    rejectUsers: false,
    loadingUsers: false,
    errorFetchingUsers: false,
};

const setLoadingUsers = (state, action) => {
    return updateObject(state, { loadingUsers: true });
};

/** FETCH Users START */
const fetchUsersFailed = (state, action) => {
    return updateObject(state, {
        loadingUsers: false,
        errorFetchingUsers: true,
    });
};

const fetchUsersSuccess = (state, action) => {
    return updateObject(state, {
        users: action.users,
        filteredUsers: action.users,
        loadingUsers: false,
        errorFetchingUsers: false,
    });
};

/** FETCH Users END */

const approveUsers = (state, action) => {
    return updateObject(state, {
        approveUsers: true,
    });
};

const rejectUsers = (state, action) => {
    return updateObject(state, {
        rejectUsers: true,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_FAILURE:
            return fetchUsersFailed(state, action);
        case actionTypes.FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(state, action);
        case actionTypes.APPROVE_USERS:
            return approveUsers(state, action);
        case actionTypes.REJECT_USERS:
            return rejectUsers(state, action);
        case actionTypes.LOADING_USERS:
            return setLoadingUsers(state, action);
        default:
            return state;
    }
};

export default reducer;