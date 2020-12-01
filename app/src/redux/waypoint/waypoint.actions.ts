import wayPointTypes from './waypoint.types';

export const setWayPointBoundingBox = (boundingBox: any) => ({
    type: wayPointTypes.SET_BOUNDING_BOX,
    payload: boundingBox
});

export const setWayPointBoundingBoxNull = () => ({
    type: wayPointTypes.SET_BOUNDING_BOX_NULL,
});

export const setWayPointPointCloud = (pointCloud: any) => ({
    type: wayPointTypes.SET_POINT_CLOUD,
    payload: pointCloud
});

export const setWayPointPointCloudNull = () => ({
    type: wayPointTypes.SET_POINT_CLOUD_NULL,
});

