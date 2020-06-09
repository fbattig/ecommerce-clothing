import React from 'react';
import './styles.scss';

export default function index({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
