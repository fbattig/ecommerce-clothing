import React from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import './styles.scss';

export default function index() {
	return (
		<div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
		</div>
	);
}
