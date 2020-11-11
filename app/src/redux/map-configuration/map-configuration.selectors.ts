import { createSelector } from 'reselect';

const selectMapConfiguration = (state: any) => state.mapConfiguration;

export const selectMapStyle = createSelector(
    [selectMapConfiguration],
    mapConfiguration => mapConfiguration.mapStyle
);