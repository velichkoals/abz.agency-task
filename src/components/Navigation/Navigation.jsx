import React from 'react';
import { Button } from '../../common/Button/Button';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import './Navigation.sass';

export const Navigation = () => {
	return (
		<div className='nav__wrapper'>
			<nav className='nav'>
				<Logo className='nav__logo' />
				<div className='nav__buttons'>
					<Button className='nav__btn' text='Users' />
					<Button className='nav__btn' text='Sign up' />
				</div>
			</nav>
		</div>
	);
};
