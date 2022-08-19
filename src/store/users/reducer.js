import { GET_USERS, SET_PAGE, SET_USER_ERROR } from './actionTypes';

const defaultState = {
	users: [],
	userErr: '',
	page: 1,
};

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_USERS: {
			return {
				users: [...action.payload],
				userErr: state.userErr,
				page: state.page,
			};
		}

		case SET_USER_ERROR: {
			return {
				users: [...state.users],
				userErr: action.payload,
				page: state.page,
			};
		}

		case SET_PAGE: {
			return {
				users: [...state.users],
				userErr: state.userErr,
				page: action.payload,
			};
		}

		default:
			return state;
	}
};
