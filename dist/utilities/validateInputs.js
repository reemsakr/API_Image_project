"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var imageExist = function (imageName, dir) {
    try {
        //make resize dir if does not exist
        if (!(0, fs_1.existsSync)(path_1.default.resolve("assets/images/".concat(dir)))) {
            (0, fs_1.mkdirSync)(path_1.default.resolve("assets/images/".concat(dir)));
        }
        if ((0, fs_1.existsSync)(path_1.default.resolve("assets/images/".concat(dir, "/").concat(imageName)))) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.error('err');
    }
    return false;
};
exports.default = imageExist;
