import React from 'react';

import './Loader.sass';

export const Loader = () => {
	return (
		<div className='lds-ring'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
