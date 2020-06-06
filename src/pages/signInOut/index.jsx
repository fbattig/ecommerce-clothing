import React from 'react';
import SignIn from './signIn';
import SignUp from './signOut';
import './styles.scss';

export default function index() {
	return (
		<div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
		</div>
	);
}
