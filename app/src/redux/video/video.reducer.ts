import videoActionTypes from "./video.types";

const INITIAL_STATE = {
    devices: [],
    selectedDevice: null,
    isStreaming: false,
};

const videoReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case videoActionTypes.SET_DEVICE_LIST: 
            return {
                ...state,
                devices: action.payload
            };
        case videoActionTypes.SET_DEVICE: 
            return {
                ...state,
                selectedDevice: action.payload
            };
        case videoActionTypes.SET_DEVICE_LIST_EMPTY:
            return {
                ...state,
                devices: []
            };
        case videoActionTypes.SET_DEVICE_EMPTY:
            return {
                ...state,
                selectedDevice: null,
            };
        case videoActionTypes.SET_IS_STREAMING:
            return {
                ...state,
                isStreaming: action.payload,
            };
        default:
            return state;
    }
};

export default videoReducer;