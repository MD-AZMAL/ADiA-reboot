import { combineReducers } from "redux";

import testReducer from './test/test.reducer';
import gcsSidebarReducer from './gcs-sidebar/gcs-sidebar.reducer';
import mapConfigurationReducer from './map-configuration/map-configuration.reducer';
import telemetryReducer from "./telemertry/telemetry.reducer";
import fcReducer from './fc/fc.reducer';
import videoReducer from './video/video.reducer';
import wayPointReducer from './waypoint/waypoint.reducers';

const rootReducer = combineReducers({
    test: testReducer,
    gcsSidebar: gcsSidebarReducer,
    mapConfiguration: mapConfigurationReducer,
    telemetry: telemetryReducer,
    fc: fcReducer,
    video: videoReducer,
    wayPoint: wayPointReducer
});

export default rootReducer;