import React from 'react';
import { Input } from '../../../common/Input/Input';

export const EmailInput = ({ errors, ...props }) => {
	return (
		<div className='input__wrapper'>
			<Input {...props} />
			<div className='err-message'>{errors?.email?.message}</div>
		</div>
	);
};
