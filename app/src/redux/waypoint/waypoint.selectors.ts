import { createSelector } from 'reselect';

const selectWayPoint = (state: any) => state.wayPoint;

export const selectWayPointPolygon = createSelector(
    [selectWayPoint],
    wayPoint => wayPoint.polygon
);

export const selectWayPointPointCloud = createSelector(
    [selectWayPoint],
    wayPoint => wayPoint.pointCloud
);