import wayPointTypes from './waypoint.types';

const INITIAL_STATE = {
    mode: null,
};

const wayPointReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case wayPointTypes.SET_DRAW_MODE:
            return {
                ...state,
                mode: action.payload
            };
        case wayPointTypes.SET_DRAW_MODE_NULL:
            return {
                ...state,
                mode: null
            };
        default:
            return state;
    }
};

export default wayPointReducer;