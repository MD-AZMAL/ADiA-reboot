import testActionTypes from './test.types';

export const testToggleValue = (val: any) => ({
    type: testActionTypes.TEST_TOGGLE_VALUE,
    payload: val
});

export const testNull = () => ({
    type: testActionTypes.TEST_NULL,
});