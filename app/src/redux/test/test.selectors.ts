import { createSelector } from "reselect";


const selectTest = (state: any) => state.test;

export const selectTestValue = createSelector(
    [selectTest],
    test => test.value
);
