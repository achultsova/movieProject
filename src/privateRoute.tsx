/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	const [ cookies] = useCookies(['token']);
	const token = cookies.token || '';
	return (
		<Route {...rest} render={props => (
			token ?
				<Component {...props} />
				: <Redirect to='/' /> )} />
	);
};

export default PrivateRoute;
    
