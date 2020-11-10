import { combineReducers } from "redux";

import testReducer from './test/test.reducer';
import gcsSidebarReducer from './gcs-sidebar/gcs-sidebar.reducer';

const rootReducer = combineReducers({
    test: testReducer,
    gcsSidebar: gcsSidebarReducer
});

export default rootReducer;