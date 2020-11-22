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
});

const setFcIsRcEnabled = (isRcEnabled: boolean) => ({
    type: fcActionTypes.SET_FC_IS_RC_ENABLED,
    payload: isRcEnabled
});

const setFcIsArmed = (isArmed: boolean) => ({
    type: fcActionTypes.SET_FC_IS_ARMED,
    payload: isArmed
});

const setFcRc = (Rc: any) => ({
    type: fcActionTypes.SET_FC_RC,
    payload: Rc
});


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
                    dispatch(setFcIsRcEnabled(false));
                    dispatch(setFCNull());
                    dispatch(setFCPNull());
                }
            } catch(err) {
                console.log(`Error in disconnect FC`);
            }
        }
    }
};

export const enableRc = () => {
    return (dispatch: any) => {
        dispatch(setFcIsRcEnabled(true));
    }
};

export const disableRc = () => {
    return (dispatch: any) => {
        dispatch(sendRawRc({arm: false,disarm: true}));
        dispatch(setFcIsRcEnabled(false));
    }
};

export const sendRawRc = (keyStatus: any) => {
    return (dispatch: any, getState: any) => {

        let sendRcStatus = false;
        let currentRc = getState().fc.Rc
        let isArmedStatus = getState().fc.isArmed;
        let FC = getState().fc.FC;

        let RcValues =  {
            roll: 1500,
            pitch: 1500,
            yaw: 1500,
            throttle: currentRc.throttle,
            arm: currentRc.arm
        }

        if(keyStatus.rollLeft) {
            RcValues.roll = 1000;
        }

        if(keyStatus.rollRight) {
            RcValues.roll = 2000;
        }

        if(keyStatus.pitchForward) {
            RcValues.pitch = 2000;
        }

        if(keyStatus.pitchBackward) {
            RcValues.pitch = 1000;
        }

        if(keyStatus.yawLeft) {
            RcValues.yaw = 1000;
        }

        if(keyStatus.yawRight) {
            RcValues.yaw = 2000;
        }

        if(keyStatus.throttleUp && isArmedStatus && RcValues.throttle < 2000) {
            RcValues.throttle = RcValues.throttle + 1;
        }

        if(keyStatus.throttleDown && isArmedStatus && RcValues.throttle > 1000) {
            RcValues.throttle = RcValues.throttle - 1;
        }

        if(keyStatus.arm && !isArmedStatus) {
            RcValues.arm = 2000;
            RcValues.throttle = 1000;
            dispatch(setFcIsArmed(true))
        }

        if(keyStatus.disarm && isArmedStatus) {
            console.log('')
            RcValues.arm = 1000;
            RcValues.throttle = 1000;
            dispatch(setFcIsArmed(false));
        }
        // dispatch(setFcRc({...RcValues}));
        console.log(keyStatus);
        console.log(`FC pointer ${FC}`);
        if(FC != null) {
            try {
                sendRcStatus = flightLib.sendRawRC(FC,RcValues.roll,RcValues.pitch,RcValues.yaw,RcValues.throttle,RcValues.arm);
                console.log(`SendRawRc status ${sendRcStatus}`)
                if(sendRcStatus) {
                    // if(RcValues.arm === 2000) {
                    //     dispatch(setFcIsArmed(true));
                    // } else {
                    //     dispatch(setFcIsArmed(false));
                    // }
                    dispatch(setFcRc({...RcValues}));
                } else {
                    console.log(`False in FC Is Armed`);
                }
            } catch(err) {
                console.log(`Error in sendRawRc`);
            }
           
        }
    }
};