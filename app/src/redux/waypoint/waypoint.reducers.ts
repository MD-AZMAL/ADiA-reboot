import wayPointTypes from './waypoint.types';

const INITIAL_STATE = {
  boundingBox: null,
  pointCloud: null,
};

const wayPointReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case wayPointTypes.SET_BOUNDING_BOX:
      return {
        ...state,
        boundingBox: action.payload,
      };
    case wayPointTypes.SET_BOUNDING_BOX_NULL:
      return {
        ...state,
        boundingBox: null,
      };
    case wayPointTypes.SET_POINT_CLOUD:
      return {
        ...state,
        pointCloud: action.payload,
      };
    case wayPointTypes.SET_POINT_CLOUD_NULL:
      return {
        ...state,
        pointCloud: null,
      };
    default:
      return state;
  }
};

export default wayPointReducer;
