import React from 'react';
import { Input } from '../../../common/Input/Input';

import '../UserForm.sass';

export const NameInput = ({ errors, ...props }) => {
	return (
		<div className='input__wrapper'>
			<Input {...props} />
			<div className='err-message'>{errors?.name?.message}</div>
		</div>
	);
};
