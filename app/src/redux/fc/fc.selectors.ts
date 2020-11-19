import { createSelector } from "reselect";


const selectFc = (state: any) => state.fc;

export const selectFC = createSelector(
    [selectFc],
    fc => fc.FC
);

export const selectFCP = createSelector(
    [selectFc],
    fc => fc.FCP
);

export const selectIsConnected = createSelector(
    [selectFc],
    fc => fc.isConnected
);

export const selectIsSubscribedToIMU = createSelector(
    [selectFc],
    fc => fc.isSubscribedToIMU
);


