import fcActionTypes from './fc.types';

const INITIAL_STATE = {
    FC: null,
    FCP: null,
    isConnected: false,
    isSubscribedToIMU: false,
};

const fcReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case fcActionTypes.SET_FC_POINTER:
            return {
                ...state,
                FC: action.payload
            };
        case fcActionTypes.SET_FC_NULL:
            return {
                ...state,
                FC: null
            };
        case fcActionTypes.SET_FCP_POINTER:
            return {
                ...state,
                FCP: action.payload
            };
        case fcActionTypes.SET_FCP_NULL:
            return {
                ...state,
                FCP: null
            };
        case fcActionTypes.SET_FC_IS_CONNECTED:
            return {
                ...state,
                isConnected: action.payload
            };
        case fcActionTypes.SET_FC_IS_SUBSCRIBED_TO_IMU: 
            return {
                ...state,
                isSubscribedToIMU: action.payload
            }
        default:
            return state;
    }
};

export default fcReducer;
