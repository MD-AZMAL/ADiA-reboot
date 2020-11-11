import { combineReducers } from "redux";

import testReducer from './test/test.reducer';
import gcsSidebarReducer from './gcs-sidebar/gcs-sidebar.reducer';
import mapConfigurationReducer from './map-configuration/map-configuration.reducer';

const rootReducer = combineReducers({
    test: testReducer,
    gcsSidebar: gcsSidebarReducer,
    mapConfiguration: mapConfigurationReducer
});

export default rootReducer;