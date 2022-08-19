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
					<a href='#users'>
						<Button href='#users' className='nav__btn' text='Users' />
					</a>
					<a href='#sign-up'>
						<Button className='nav__btn' text='Sign up' />
					</a>
				</div>
			</nav>
		</div>
	);
};
