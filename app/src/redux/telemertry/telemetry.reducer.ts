import telemetryActionTypes from './telemetry.types';

const INITIAL_STATE = {
    accel: {X: 0, Y: 0, Z: 0},
    gyro: {X: 0, Y: 0, Z: 0}
}

const telemetryReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case telemetryActionTypes.SET_ACC:
            return {
                ...state,
                accel: action.payload
            };
        case telemetryActionTypes.SET_GYR:
            return {
                ...state,
                gyro: action.payload
            };
        case telemetryActionTypes.SET_TELEMETRY_EMPTY:
            return {
                ...state,
                ...INITIAL_STATE
            };
        default:
            return state;
    }
};

export default telemetryReducer;