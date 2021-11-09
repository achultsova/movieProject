import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	const {token} = JSON.parse(localStorage.getItem('loginInfo') || '{}');
	return (
		<Route {...rest} render={props => (
			token ?
				<Component {...props} />
				: <Redirect to='/' />)} />
	);
};

export default PrivateRoute;