import React, { useEffect } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Banner } from '../../components/Banner/Banner';
import { Cards } from '../../components/Cards/Cards';
import { UserForm } from '../../components/UserForm/UserForm';
import axios from 'axios';

import './HomePage.sass';

export const HomePage = () => {
	useEffect(() => {
		axios
			.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
			.then((response) => localStorage.setItem('token', response.data.token))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Navigation />
			<div className='container__wrapper'>
				<div className='container'>
					<Banner />
					<Cards />
					<UserForm />
				</div>
			</div>
		</>
	);
};
