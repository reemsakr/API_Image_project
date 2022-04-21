"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import exp from 'constants'
var express_1 = __importDefault(require("express"));
//import { request } from 'http'
var images_1 = __importDefault(require("./api/images"));
// root route
var routes = express_1.default.Router();
// endpoint
routes.get('/', function (req, res) {
    res.send('welcome to Image processing API application.');
});
//path to images as a midleware
routes.use('/images', images_1.default);
exports.default = routes;
