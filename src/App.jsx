import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop'
import Header from './components/header'
import SignInOut from './pages/signInOut'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component ={SignInOut} />
			</Switch>
		</div>
	);
}

export default App;
