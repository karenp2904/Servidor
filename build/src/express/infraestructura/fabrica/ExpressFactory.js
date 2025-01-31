"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FactoryCitaRouter_1 = __importDefault(require("../../../cita/infraestructura/factory/FactoryCitaRouter"));
const FactoryClienteRouter_1 = __importDefault(require("../../../cita/infraestructura/factory/FactoryClienteRouter"));
const FactoryTurnoRouter_1 = __importDefault(require("../../../cita/infraestructura/factory/FactoryTurnoRouter"));
const FactoryUsuarioRouter_1 = __importDefault(require("../../../cita/infraestructura/factory/FactoryUsuarioRouter"));
const Server_1 = __importDefault(require("../server/Server"));
class ExpressFactory {
    static create = () => {
        const citaRouterExpress = FactoryCitaRouter_1.default.create();
        const clienteRouterExpress = FactoryClienteRouter_1.default.create();
        const turnoRouterExpress = FactoryTurnoRouter_1.default.create();
        const usuarioRouterExpress = FactoryUsuarioRouter_1.default.create();
        const server = new Server_1.default([citaRouterExpress, clienteRouterExpress, turnoRouterExpress, usuarioRouterExpress]);
        return server;
    };
}
exports.default = ExpressFactory;
