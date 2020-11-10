import testActionTypes from './test.types';

export const testToggleValue = val => ({
    type: testActionTypes.TEST_TOGGLE_VALUE,
    payload: val
});

export const testNull = () => ({
    type: testActionTypes.TEST_NULL,
});