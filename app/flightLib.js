// const fs = require('fs')
// const ffi = require('ffi-napi');
// const ref = require('ref-napi');
// import ffi from 'ffi-napi';
// import * from 'ffi-napi';
const fs = require('fs')

import path from 'path';
import { ffi, ref } from './nativeImports';
// console.log(__dirname);
// console.log(process.resourcesPath);

// fs.readdir(__dirname, (err,items)=>{
//     console.log(items);
// });

// const libPath = process.env.NODE_ENV === "production" ? path.join(process.resourcesPath,'dll','fclib') : './dll/fclib' ;
const libPath = path.join(process.env.NODE_ENV === 'production' && process.env.DLL_MOVED !== 'FALSE' ? process.resourcesPath : __dirname, 'dll', 'fclib');

const flightControllerVariable = ref.types.void;
const flightController = ref.refType(flightControllerVariable);

const flightPropertiesVariable = ref.types.void;
const flightProperties = ref.refType(flightPropertiesVariable);

const flightLib = ffi.Library(libPath, {
    'initCheck': ['int', ['int', 'int']],
    'initSleepCheck': ['int', ['int', 'int', 'int']],
    'createFlightController': [flightController, []],
    'createProperties': [flightProperties, ['string']],
    'connectFlightController': ['bool', [flightController, 'string', 'size_t' ]], // fc, port, 
    'disconnectFlightController': ['bool', [flightController]],
    'subscribeToIMU': ['void', [flightController, flightProperties, 'double']],
    'getBoardName': ['string', [flightController, flightProperties]],
    'getIMU_ACC_X': ['double', [flightProperties]],
    'getIMU_ACC_Y': ['double', [flightProperties]],
    'getIMU_ACC_Z': ['double', [flightProperties]],
    'getIMU_GYR_X': ['double', [flightProperties]],
    'getIMU_GYR_Y': ['double', [flightProperties]],
    'getIMU_GYR_Z': ['double', [flightProperties]],
    'getIMU_MAG_X': ['double', [flightProperties]],
    'getIMU_MAG_Y': ['double', [flightProperties]],
    'getIMU_MAG_Z': ['double', [flightProperties]],
    'setMotors': ['bool', [flightController, 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16']], // Motor 1-6 
    'sendRawRC': ['bool', [flightController,'uint16', 'uint16', 'uint16', 'uint16', 'uint16']], // roll pitch yaw throttle arm
});

export default flightLib;