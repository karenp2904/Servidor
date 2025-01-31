"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterExpress_1 = __importDefault(require("../../../../express/dominio/RouterExpress"));
class UsuarioRouterExpress extends RouterExpress_1.default {
    usuarioController;
    constructor(usuarioController) {
        super();
        this.usuarioController = usuarioController;
        this.routes();
    }
    routes = () => {
        this.validarCredenciales();
    };
    validarCredenciales() {
        this.router.post('/sistema/usuario/login', this.usuarioController.validarCredenciales.bind(this.usuarioController));
    }
}
exports.default = UsuarioRouterExpress;
