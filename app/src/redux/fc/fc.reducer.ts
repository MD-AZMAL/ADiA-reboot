import fcActionTypes from './fc.types';

const INITIAL_STATE = {
    FC: null,
    FCP: null,
    isConnected: false,
    isSubscribedToIMU: false,
    isRcEnabled: false,
    isArmed: false,
    Rc: {
        roll: 1500,
        pitch: 1500,
        yaw: 1500,
        throttle: 1000,
        arm: 1000
    }
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
        case fcActionTypes.SET_FC_IS_RC_ENABLED:
            return {
                ...state,
                isRcEnabled: action.payload
            };
        case fcActionTypes.SET_FC_IS_ARMED:
            return {
                ...state,
                isArmed: action.payload
            };
        case fcActionTypes.SET_FC_RC:
            return {
                ...state,
                Rc: action.payload
            };
        default:
            return state;
    }
};

export default fcReducer;
