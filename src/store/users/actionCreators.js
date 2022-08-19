import { GET_USERS, SET_PAGE, SET_USER_ERROR } from './actionTypes';

export const getUsersAction = (payload) => ({
	type: GET_USERS,
	payload,
});

export const setUserErrAction = (payload) => ({
	type: SET_USER_ERROR,
	payload,
});

export const setPageAction = (payload) => ({
	type: SET_PAGE,
	payload,
});
