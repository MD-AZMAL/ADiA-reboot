import wayPointTypes from './waypoint.types';

const INITIAL_STATE = {
  polygon: null,
  pointCloud: null,
};

const wayPointReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case wayPointTypes.SET_POLYGON:
      return {
        ...state,
        polygon: action.payload,
      };
    case wayPointTypes.SET_POLYGON_NULL:
      return {
        ...state,
        polygon: null,
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
