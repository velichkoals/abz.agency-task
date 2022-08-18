import React from 'react';

import './Button.sass';

export const Button = ({ text, className, ...props }) => {
	return (
		<button {...props} className={`main-button ${className || ''}`}>
			{text}
		</button>
	);
};
