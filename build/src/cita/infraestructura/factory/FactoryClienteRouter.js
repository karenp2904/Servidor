"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteControllerExpress_1 = __importDefault(require("../express/controller/ClienteControllerExpress"));
const ClienteRouterExpress_1 = __importDefault(require("../express/router/ClienteRouterExpress"));
const FactoryClienteUseCase_1 = __importDefault(require("./FactoryClienteUseCase"));
class FactoryClienteRouter {
    static create = () => {
        const clienteUseCase = FactoryClienteUseCase_1.default.create();
        const clienteController = new ClienteControllerExpress_1.default(clienteUseCase);
        return new ClienteRouterExpress_1.default(clienteController);
    };
}
exports.default = FactoryClienteRouter;
