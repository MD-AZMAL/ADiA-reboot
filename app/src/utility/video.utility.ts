export const convertMediaDevicesToDataItem = (mediaList: any) => {
    return mediaList.map(({deviceId,label}: any)=> ({
        value: deviceId,
        label: label
    }));
};

export const getMediaDevices = async (kind='videoinput') => {
    const mediaDevices = await navigator.mediaDevices.enumerateDevices();
    return mediaDevices.filter(device => device.kind === kind);
};