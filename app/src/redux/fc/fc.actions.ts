import fcActionTypes from './fc.types';
import flightLib from '../../../flightLib';

const setFC = (FC: any) => ({
    type: fcActionTypes.SET_FC_POINTER,
    payload: FC,
});

const setFCP = (FCP: any) => ({
    type: fcActionTypes.SET_FCP_POINTER,
    payload: FCP,
});

const setFCNull = () => ({
    type: fcActionTypes.SET_FC_NULL,
});

const setFCPNull = () => ({
    type: fcActionTypes.SET_FCP_NULL,
});

const setFCIsConnected = (isConnected: boolean) => ({
    type: fcActionTypes.SET_FC_IS_CONNECTED,
    payload: isConnected,
});

const setFCIsSubscribedToIMU = (isSubscribedToIMU: boolean) => ({
    type: fcActionTypes.SET_FC_IS_SUBSCRIBED_TO_IMU,
    payload: isSubscribedToIMU
})

export const createFlightController = () => {
    return (dispatch: any) => {
        try {
            let FC = flightLib.createFlightController();
            dispatch(setFC(FC));
        } catch (err) {
            console.log(`Error in CreateFlightController`);
        }
    }
};

export const createFlightControllerProperty = () => {
    return (dispatch: any) => {
        try {
            let FCP = flightLib.createProperties("telemetry");
            dispatch(setFCP(FCP));
        } catch (err) {
            console.log(`Error in createFlightProperties`);
        }
    }
};

export const connectFc = (FC: any,port: string, boudRate: number) => {
    return (dispatch: any) => {
        try {
            let res = flightLib.connectFlightController(FC,port,boudRate);
            // console.log(`Connect Result : ${res}`);
            dispatch(setFCIsConnected(res));
        } catch(err) {
            console.log(`Error in ConnectFC`);
        }
    }
};

export const subscribeToIMU = (FC: any,FCP: any, frequency: number) => {
    return (dispatch: any) => {
        try {
            flightLib.subscribeToIMU(FC,FCP,frequency);
            dispatch(setFCIsSubscribedToIMU(true));
        } catch(err) {
            console.log(`Error in subscribeToIMU`);
        }
    }
}

export const disconnectFc = (FC: any) => {
    return (dispatch: any) => {
        try {
            let res = flightLib.disconnectFlightController(FC);
            dispatch(setFCIsConnected(!res));
            dispatch(setFCIsSubscribedToIMU(false));
        } catch(err) {
            console.log(`Error in disconnect FC`);
        }
    }
};

