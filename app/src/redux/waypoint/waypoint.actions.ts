import wayPointTypes from './waypoint.types';

export const setWayPointMode = (mode: any) => ({
    type: wayPointTypes.SET_DRAW_MODE,
    payload: mode
});

export const setWayPointModeNull = () => ({
    type: wayPointTypes.SET_DRAW_MODE_NULL,
});
