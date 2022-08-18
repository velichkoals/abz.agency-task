import React from 'react';
import { Input } from '../../../common/Input/Input';

export const PhoneInput = ({ errors, ...props }) => {
	return (
		<div className='input__wrapper'>
			<Input {...props} />
			<div className='err-message'>{errors?.phone?.message}</div>
		</div>
	);
};
