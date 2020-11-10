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

const flightLib = ffi.Library(libPath, {
    'initCheck': ['int', ['int', 'int']]
});

// const flightLib = {
//     initCheck() {
//         return 5;
//     }
// }

export default flightLib;