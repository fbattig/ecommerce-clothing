import React from 'react';
import FormInput from '../../../components/formInput'
import CustomButton from '../../../components/customButton'
import '../styles.scss';

class index extends React.Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
		console.log(event);
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
						label='email'
					/>
					<FormInput
						type="password"
						name= "password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label='password'
					/>
					<CustomButton type="submit" >Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default index;
