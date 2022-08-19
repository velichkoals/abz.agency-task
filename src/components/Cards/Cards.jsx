import React, { useEffect } from 'react';
import { Button } from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersData } from '../../store/selectors';
import { getAllUsersThunk } from '../../store/users/thunk';

import './Cards.sass';

export const Cards = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsersData);

	useEffect(() => {
		dispatch(getAllUsersThunk());
	}, []);

	return (
		<section className='cards' id='users'>
			<div className='cards__title'>Working with GET request</div>
			<div className='cards__list'>
				{users.map((card) => (
					<div key={card.id} className='card'>
						<img src={card.photo} alt='card-img' className='card__img' />
						<div className='card__name'>{card.name}</div>
						<div className='card__prop'>{card.position}</div>
						<div className='card__prop'>{card.email}</div>
						<div className='card__prop'>{card.phone}</div>
					</div>
				))}
			</div>
			<Button text='Show more' />
		</section>
	);
};
