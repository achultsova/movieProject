import { Dispatch } from 'redux'
import loginService from '../services/loginService';
import * as actionTypes from "../types/loginTypes";
import alertActions from './alertActions';



const loginAction: any = {
    login: ( email: string, password: string) => (dispatch: Dispatch<any>) => {

        function request(user: any) { return { type: actionTypes.LOGIN_REQUEST, user } }
        function success(user: any) { return { type: actionTypes.LOGIN_SUCCESS, user } }
        function failure(error: any) { return { type: actionTypes.LOGIN_FAILURE, error } }

        dispatch (request({ email }))
        loginService( email, password)
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