import { createSelector } from 'reselect';

const selectVideo = (state: any) => state.video;

export const selectVideoDevices = createSelector(
    [selectVideo],
    video => video.devices  
);

export const selectSelectedVideoDevice = createSelector(
    [selectVideo],
    video => video.selectedDevice  
);

export const selectIsVideoStreaming = createSelector(
    [selectVideo],
    video => video.isStreaming
);