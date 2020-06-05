import React from 'react';
import './styles.scss';

export default function index({ children, isGoogleSignIn, ...otherProps }) {
	return (
		<button
			{...otherProps}
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		>
			{children}
		</button>
	);
}
