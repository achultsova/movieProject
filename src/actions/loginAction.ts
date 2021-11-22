import { Dispatch } from 'redux'
import loginService from '../services/loginService';
import * as actionTypes from "../types/loginTypes";
import alertActions from './alertActions';



const loginAction: any = {
    login: (username: string, email: string, password: string) => (dispatch: Dispatch<any>) => {

        function submit(user: any) { return { type: actionTypes.LOGIN_SUBMIT, user } }
        function success(user: any) { return { type: actionTypes.LOGIN_SUCCESS, user } }
        function failure(error: any) { return { type: actionTypes.LOGIN_FAILURE, error } }

        dispatch (submit({ username }))
        loginService( username, email, password)
            .then (
                user => {
                    dispatch (success(user))             
                },
                error => {
                    dispatch (failure(error));
                    dispatch(
                        alertActions.error(error)
                    )
                }    
            )
    },
    logout: () => (dispatch: Dispatch<any>) => {
            dispatch ({
                type: actionTypes.LOGOUT,
            });  
}
}

    

    // login: () => (dispatch: Dispatch<any>) => {
    //     dispatch ({
    //         type: actionTypes.LOGIN_SUBMIT,
    //     });
    //     dispatch ({
    //         type: actionTypes.LOGIN_SUCCESS, 
    //     })
        
    // },
    // changeData: (data: any) => ({
    //     type: actionTypes.LOGIN_DATA_CHANGE,
    //     payload: data
    // }),                                             
    // logout: () => (dispatch: Dispatch<any>) => {
    //     dispatch ({
    //         type: actionTypes.LOGOUT,
    //     });
    // }






export default loginAction