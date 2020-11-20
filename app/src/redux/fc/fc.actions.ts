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

export const connectFc = (port: string, boudRate: number) => {
    return (dispatch: any, getState: any) => {

        dispatch(createFlightController());
        
        let FC = getState().fc.FC;
        let connectResult = false;

        if(FC != null) {
            try {
                connectResult = flightLib.connectFlightController(FC,port,boudRate);
                dispatch(setFCIsConnected(connectResult));
            } catch(err) {
                console.log(`Error in ConnectFC`);
            }
        }
    }
};

export const subscribeToIMU = (frequency: number) => {
    return (dispatch: any, getState: any) => {
        let isConnected = getState().fc.isConnected;

        if(isConnected) {  
            dispatch(createFlightControllerProperty());
        
            let FC = getState().fc.FC;
            let FCP = getState().fc.FCP;

            if(FC != null && FCP != null) {
                try {
                    flightLib.subscribeToIMU(FC,FCP,frequency);
                    dispatch(setFCIsSubscribedToIMU(true));
                } catch(err) {
                    console.log(`Error in subscribeToIMU`);
                }
            }
        }
    }
}

export const disconnectFc = (setTelemetryEmpty: any) => {
    return (dispatch: any,getState: any) => {
        let disconnectResult = false;
        let FC = getState().fc.FC;

        if(FC != null) {
            try {
                 disconnectResult = flightLib.disconnectFlightController(FC);
                if(disconnectResult === true) {
                    dispatch(setTelemetryEmpty());
                    dispatch(setFCIsConnected(false));
                    dispatch(setFCIsSubscribedToIMU(false));
                    dispatch(setFCNull());
                    dispatch(setFCPNull());
                }
            } catch(err) {
                console.log(`Error in disconnect FC`);
            }
        }
    }
};

