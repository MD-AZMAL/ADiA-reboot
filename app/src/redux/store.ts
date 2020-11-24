import { createStore, applyMiddleware } from "redux";
import { logger, createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";
import fcActionTypes from './fc/fc.types';
import telemetryActionTypes from './telemertry/telemetry.types';

const middleware: any[] = [thunk];

const loggerCustom = createLogger({
    predicate: (getState, action) => !(action.type === fcActionTypes.SET_FC_RC || action.type === telemetryActionTypes.SET_ACC || action.type === telemetryActionTypes.SET_GYR)
});

if(process.env.NODE_ENV === 'development'){
    middleware.push(loggerCustom);
}

export const store = createStore(rootReducer,applyMiddleware(...middleware));