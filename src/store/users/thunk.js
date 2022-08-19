import axios from 'axios';
import {
	getUsersAction,
	setPageAction,
	setUserErrAction,
} from './actionCreators';

export const getAllUsersThunk = () => {
	return (dispatch) => {
		axios
			.get(
				'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
			)
			.then((response) => dispatch(getUsersAction(response.data.users)))
			.catch((err) => console.log(err));
	};
};

export const setUser = (user) => {
	return async (dispatch) => {
		axios
			.post(
				'https://frontend-test-assignment-api.abz.agency/api/v1/users',
				user,
				{
					headers: {
						Token: localStorage.getItem('token'),
						'content-type': 'multipart/form-data',
					},
				}
			)
			.then(() => {
				dispatch(setUserErrAction('successful'));
				dispatch(getAllUsersThunk());
				dispatch(setPageAction(1));
			})
			.catch((err) => dispatch(setUserErrAction(err.response.data.message)));
	};
};

export const getNextPage = (page) => {
	return (dispatch) => {
		axios
			.get(
				`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
			)
			.then((response) => {
				if (response.data.page <= response.data.total_pages) {
					dispatch(getUsersAction(response.data.users));
					dispatch(setPageAction(page));
				}
				if (response.data.page === response.data.total_pages) {
					dispatch(setPageAction('last'));
				}
			})
			.catch((err) => console.log(err));
	};
};
