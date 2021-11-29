import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface IProps {
	exact?: boolean | undefined;
	path: string;
	component: React.ComponentType;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
	const [ cookies] = useCookies(['token']);
	const token = cookies.token || '';
	return (
		<>
		<Route {...rest} render={props => (
			token ?
				<Component {...props} />
				: <Redirect to='/' /> )} />
		</>
	);
};

export default PrivateRoute;
    
