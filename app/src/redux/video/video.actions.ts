import videoActionTypes from './video.types';

export const setVideoDevices = (devices: any) => ({
    type: videoActionTypes.SET_DEVICE_LIST,
    payload: devices
});

export const setSelectedVideoDevice = (device: any) => ({
    type: videoActionTypes.SET_DEVICE,
    payload: device
});

export const setVideoDeviceListEmpty = () => ({
    type: videoActionTypes.SET_DEVICE_LIST_EMPTY
});

export const setSelectedVideoDeviceEmpty = () => ({
    type: videoActionTypes.SET_DEVICE_EMPTY
});

export const setVideoIsStreaming = (isStreaming: boolean) => ({
    type: videoActionTypes.SET_IS_STREAMING,
    payload: isStreaming
}); 

export const setIsVideoEnabled = (isVideoEnabled: boolean) => ({
    type: videoActionTypes.SET_IS_VIDEO_ENABLED,
    payload: isVideoEnabled
});

export const setSelectedVideoDeviceById = (deviceId: string, videoDevices: any) => {
    return (dispatch: any) => {
        const currentVideoDevice = videoDevices.find((device: any) => device.deviceId === deviceId);
        
        if(currentVideoDevice) {
            dispatch(setSelectedVideoDevice(currentVideoDevice));
            dispatch(setVideoIsStreaming(true))
        } else {
            console.log('Invalid video Id');
            dispatch(setVideoIsStreaming(false));
        }
    };
};

export const disconnectStreaming = () => {
    return (dispatch: any) => {
        dispatch(setSelectedVideoDeviceEmpty());
        dispatch(setVideoIsStreaming(false));
    };
};
