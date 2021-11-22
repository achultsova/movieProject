import * as actionTypes from "../types/alertTypes";
import { stateProps } from "./loginReducer";

type actionProps = {
    type: string;
    message?: any
} 

const alertReducer = (
    state: stateProps,
    action: actionProps
) => {
    switch (action.type) {
        case actionTypes.ALERT_SUCCESS:
          return {
            type: 'alert-success',
            message: action.message
          };
        case actionTypes.ALERT_ERROR:
          return {
            type: 'alert-danger',
            message: action.message
          };
        case actionTypes.ALERT_CLEAR:
          return {};
        default:
          return state
      }
}

export default alertReducer
