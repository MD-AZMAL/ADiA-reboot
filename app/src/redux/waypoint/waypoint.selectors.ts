import { createSelector } from 'reselect';

const selectWayPoint = (state: any) => state.wayPoint;

export const selectWayPointBoundingBox = createSelector(
    [selectWayPoint],
    wayPoint => wayPoint.boundingBox
);

export const selectWayPointPointCloud = createSelector(
    [selectWayPoint],
    wayPoint => wayPoint.pointCloud
);