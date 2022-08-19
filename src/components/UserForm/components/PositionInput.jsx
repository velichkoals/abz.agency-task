import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';

import '../UserForm.sass';

export const PositionInput = () => {
	const { register } = useFormContext();
	const [positions, setPositions] = useState([]);

	useEffect(() => {
		axios
			.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
			.then((response) => {
				setPositions(response.data.positions);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='user-form__position'>
			<div className='position__text'>Select your position</div>
			{positions.map((position) => (
				<div className='position__item' key={position.id}>
					<input
						{...register('position_id', { required: 'Select position' })}
						type='radio'
						id={position.id}
						className='position__input'
						name='position'
						value={position.id}
						defaultChecked={position.id === 1 && true}
					/>
					<label htmlFor={position.id}>{position.name}</label>
				</div>
			))}
		</div>
	);
};
