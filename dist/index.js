"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
//port number
var port = 5000;
//create a server
var app = (0, express_1.default)();
//add routing
app.use('/api', index_1.default);
//start server
app.listen(port, function () {
    console.log("server has been started in port :".concat(port));
});
exports.default = app;
