import mapConfigurationTypes from './map-configuration.types';

const INITIAL_STATE = {
    mapStyle: ""
}

const mapConfigurationReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case mapConfigurationTypes.SET_MAP_STYLE: 
            return {
                ...state,
                mapStyle: action.payload
            }
        default:
            return state;
    }
};

export default mapConfigurationReducer;

// Sattelite : mapbox://styles/mapbox/satellite-v9
// Basic Dark : mapbox://styles/mdazmal/ckhdjbiog2i5i19rja5dk28vm
