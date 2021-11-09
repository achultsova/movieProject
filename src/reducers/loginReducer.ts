import * as actionTypes from "../types/loginTypes"

type stateProps = {
    email: string;
    password: string;
    loading: boolean
}


type actionProps = {
    type: string;
    payload?: any
}

const initialState: stateProps = {
email: "",
password: "",
loading: false
}

const loginReducer = (
    state: stateProps = initialState,
    action: actionProps
) => {
  switch (action.type) {

    case actionTypes.LOGIN_SUBMIT:
      return {
        email: action.payload.email,
        password: action.payload.password,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS: {
        const formData = { email: state.email, password: state.password, token: 'hufirpusdnp89p4587n' }
        localStorage.setItem('loginInfo', JSON.stringify(formData))  
        return {
          ...state,
          loading: false,
        };
      }
    
    
      default:
        return state;
    }  
}

export default loginReducer;

