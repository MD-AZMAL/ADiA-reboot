import {createSelector} from 'reselect';

const selectTelemetry = (state: any) => state.telemetry;

export const selectAccel = createSelector(
    [selectTelemetry],
    telemetry => telemetry.accel
);

export const selectGyro = createSelector(
    [selectTelemetry],
    telemetry => telemetry.gyro
);