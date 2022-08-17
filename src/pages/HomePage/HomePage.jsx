import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Banner } from '../../components/Banner/Banner';
import { Cards } from '../../components/Cards/Cards';

import './HomePage.sass';

export const HomePage = () => {
	return (
		<>
			<Navigation />
			<div className='container'>
				<Banner />
				<Cards />
			</div>
		</>
	);
};
