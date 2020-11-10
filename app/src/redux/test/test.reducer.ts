import testActionTypes from "./test.types";

const INITIAL_STATE = {
    value: 0
}
const testReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case testActionTypes.TEST_TOGGLE_VALUE: 
            return {
                ...state,
                value: action.payload
            };
        case testActionTypes.TEST_NULL:
            return {
                ...state,
                value: 0
            };
        default:
            return state;
    }
};

export default testReducer;
