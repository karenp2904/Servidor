"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressFactory_1 = __importDefault(require("./express/infraestructura/fabrica/ExpressFactory"));
const server = ExpressFactory_1.default.create();
server.start();
