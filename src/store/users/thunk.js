import axios from 'axios';
import { getUsersAction } from './actionCreators';

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
