import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useCookies } from 'react-cookie'

type PrivateRouteProps = {
	path: RouteProps['path'];
	component: React.ElementType;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const [ cookies] = useCookies(['token'])
    const token = cookies.token || ''
    return (
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
                : <Redirect to='/account' /> )} />
    )
}

export default PrivateRoute
    
