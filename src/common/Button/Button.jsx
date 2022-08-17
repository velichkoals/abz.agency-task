import React from 'react';

import './Button.sass';

export const Button = ({ text, className, ...props }) => {
	console.log(props);
	return (
		<button {...props} className={`main-button ${className}`}>
			{text}
		</button>
	);
};
