import * as actionTypes from "../types/registrationTypes"

type stateProps = {
	username: string;
    email: string;
    mobile: string;
    age: number;
    password: string;
	token: string;
    formSubmitted: boolean
}

type actionProps = {
    type: string;
    payload?: any
}

const initialState: stateProps = {
    username: '',
    email: '',
    mobile: '',
    age: 22,
    password: '',
    token: '',
    formSubmitted: false
    }

const registrationReducer = (
    state: stateProps = initialState,
    action: actionProps
) => {
    switch (action.type) {
        case actionTypes.ADD_USER: {
            return {
                ...state,
            formSubmitted: false    

            }
        }
        case actionTypes.FORM_SUBMITION_STATUS: {
            return {
                ...state,
                formSubmitted: action.payload.status
            }
        }
        default:
      return state;
    }
}

export default registrationReducer
