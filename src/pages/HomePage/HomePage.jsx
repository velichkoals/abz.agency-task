import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Banner } from '../../components/Banner/Banner';
import { Cards } from '../../components/Cards/Cards';
import { UserForm } from '../../components/UserForm/UserForm';

import './HomePage.sass';

export const HomePage = () => {
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
