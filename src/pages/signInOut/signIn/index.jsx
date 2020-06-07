import React from 'react';
import FormInput from '../../../components/formInput';
import CustomButton from '../../../components/customButton';
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';
import './styles.scss';

class index extends React.Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error)
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label="email"
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label="password"
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default index;
