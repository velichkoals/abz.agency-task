import React, { useEffect, useState } from 'react';
import { Button } from '../../common/Button/Button';
import axios from 'axios';

import './Cards.sass';

export const Cards = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
			)
			.then((response) => {
				setCards(response.data.users);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className='cards' id='users'>
			<div className='cards__title'>Working with GET request</div>
			<div className='cards__list'>
				{cards.map((card) => (
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
