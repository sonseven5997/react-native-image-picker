"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchImageLibrary = exports.launchCamera = void 0;
const react_native_1 = require("react-native");
__exportStar(require("./types"), exports);
const DEFAULT_OPTIONS = {
    mediaType: 'photo',
    videoQuality: 'high',
    quality: 1,
    maxWidth: 0,
    maxHeight: 0,
    includeBase64: false,
    cameraType: 'back',
    selectionLimit: 1,
    saveToPhotos: false,
    durationLimit: 0,
    includeExtra: false,
};
function launchCamera(options, callback) {
    return new Promise(resolve => {
        react_native_1.NativeModules.ImagePickerManager.launchCamera({ ...DEFAULT_OPTIONS, ...options }, (result) => {
            if (callback)
                callback(result);
            resolve(result);
        });
    });
}
exports.launchCamera = launchCamera;
function launchImageLibrary(options, callback) {
    return new Promise(resolve => {
        react_native_1.NativeModules.ImagePickerManager.launchImageLibrary({ ...DEFAULT_OPTIONS, ...options }, (result) => {
            if (callback)
                callback(result);
            resolve(result);
        });
    });
}
exports.launchImageLibrary = launchImageLibrary;
