import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import './styles.scss';

const index =({currentUser})=> {
		return (
			<div className="header">
				<Link to="/" className="logo-container">
					<Logo className="logo" />
				</Link>
				<div className="options">
					<Link className="option" to="/shop">
						SHOP
					</Link>
					<Link className="option" to="/shop">
						CONTACT
					</Link>
					{currentUser ? (
						<div className="option" onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					) : (
						<Link to="/signIn" className="option">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
		);
	}
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(index);
