import React, { useEffect } from 'react';
import { Button } from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getPage, getUsersData } from '../../store/selectors';
import { getAllUsersThunk, getNextPage } from '../../store/users/thunk';
import { Loader } from '../Loader/Loader';

import './Cards.sass';

export const Cards = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsersData);
	const page = useSelector(getPage);

	useEffect(() => {
		dispatch(getAllUsersThunk());
	}, []);

	const nextPage = () => {
		if (page !== 'last') {
			dispatch(getNextPage(page + 1));
		}
	};

	return (
		<section className='cards' id='users'>
			<div className='cards__title'>Working with GET request</div>
			<div className='cards__list'>
				{users.length > 0 ? (
					users.map((card) => (
						<div key={card.id} className='card'>
							<img src={card.photo} alt='card-img' className='card__img' />
							<div className='card__name card__item'>
								{card.name}
								<div className='tooltip'>{card.name}</div>
							</div>
							<div className='card__prop'>{card.position}</div>
							<div className='card__prop card__item'>
								{card.email}
								<div className='tooltip'>{card.email}</div>
							</div>
							<div className='card__prop'>{card.phone}</div>
						</div>
					))
				) : (
					<Loader />
				)}
			</div>
			<Button
				className={`${page === 'last' && 'btn_display-none'}`}
				text='Show more'
				onClick={nextPage}
			/>
		</section>
	);
};
