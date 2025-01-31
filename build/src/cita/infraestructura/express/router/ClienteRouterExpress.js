"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterExpress_1 = __importDefault(require("../../../../express/dominio/RouterExpress"));
class ClienteRouterExpress extends RouterExpress_1.default {
    clienteController;
    constructor(clienteController) {
        super();
        this.clienteController = clienteController;
        this.routes();
    }
    routes = () => {
        this.obtenerCliente();
    };
    obtenerCliente() {
        this.router.get('/sistema/cliente/obtener', this.clienteController.obtenerCliente.bind(this.clienteController));
    }
}
exports.default = ClienteRouterExpress;
