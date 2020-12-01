import { createSelector } from 'reselect';

const selectWayPoint = (state: any) => state.video;

export const selectWayPointMode = createSelector(
    [selectWayPoint],
    wayPoint => wayPoint.mode
);