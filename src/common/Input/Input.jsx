import React from 'react';
import { useFormContext } from 'react-hook-form';

import './Input.sass';

export const Input = ({ placeholder, className, ...props }) => {
	const { register } = useFormContext();
	const { name, options } = props;

	return (
		<div className='main-input__wrapper'>
			<input
				required
				{...props}
				{...register(name, options)}
				className={`main-input ${className || ''}`}
			/>
			<label className='main-label'>{placeholder}</label>
		</div>
	);
};
