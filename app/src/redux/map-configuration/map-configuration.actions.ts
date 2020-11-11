import mapConfigurationTypes from './map-configuration.types';

export const setMapStyle = (mapStyle: string) => ({
    type: mapConfigurationTypes.SET_MAP_STYLE,
    payload: mapStyle
});