import React from 'react';
import { Button } from '../../common/Button/Button';

import './Banner.sass';

export const Banner = () => {
	return (
		<div className='banner__wrapper'>
			<section className='banner'>
				<div className='banner__title'>
					Test assignment for front-end developer
				</div>
				<div className='banner__text'>
					What defines a good front-end developer is one that has skilled
					knowledge of HTML, CSS, JS with a vast understanding of User design
					thinking as they'll be building web interfaces with accessibility in
					mind. They should also be excited to learn, as the world of Front-End
					Development keeps evolving.
				</div>
				<Button text='Sign up' />
			</section>
		</div>
	);
};
