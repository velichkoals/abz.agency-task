import React from 'react';

import './HomePage.sass';
import { Navigation } from '../../components/Navigation/Navigation';
import { Banner } from '../../components/Banner/Banner';

export const HomePage = () => {
	return (
		<>
			<Navigation />
			<div className='container'>
				<Banner />
			</div>
		</>
	);
};
