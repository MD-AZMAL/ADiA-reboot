import telemetryActionTypes from './telemetry.types';
import flightLib from '../../../flightLib';

const setAcc = (acc: any) => ({
    type: telemetryActionTypes.SET_ACC,
    payload: acc
});

const setGyr = (gyro: any) => ({
    type: telemetryActionTypes.SET_GYR,
    payload: gyro
});

export const setTelemetryEmpty = () => ({
    type: telemetryActionTypes.SET_TELEMETRY_EMPTY
});


export const setAccelerometer = (FCP: any) => {
    return (dispatch: any) => {
        let X,Y,Z;
        X = Y = Z = 0;

        try {
            X = flightLib.getIMU_ACC_X(FCP);
        } catch(err) {
            console.log(`Error in getIMU_ACC`)
        }

        try {
            Y = flightLib.getIMU_ACC_Y(FCP);
        } catch(err) {
            console.log(`Error in getIMU_ACC`)
        }

        try {
            Z = flightLib.getIMU_ACC_Z(FCP);
        } catch(err) {
            console.log(`Error in getIMU_ACC`)
        }

        dispatch(setAcc({X,Y,Z}));
    }
};


export const setGyroscope = (FCP: any) => {
    return (dispatch: any) => {
        let X,Y,Z;
        X = Y = Z = 0;

        try {
            X = flightLib.getIMU_GYR_X(FCP);
        } catch(err) {
            console.log(`Error in getIMU_GYR`)
        }

        try {
            Y = flightLib.getIMU_GYR_Y(FCP);
        } catch(err) {
            console.log(`Error in getIMU_GYR`)
        }

        try {
            Z = flightLib.getIMU_GYR_Z(FCP);
        } catch(err) {
            console.log(`Error in getIMU_GYR`)
        }

        dispatch(setGyr({X,Y,Z}));
    }
};
