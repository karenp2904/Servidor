"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminUseCase_1 = __importDefault(require("../../aplicacion/useCase/AdminUseCase"));
const CitaUseCase_1 = __importDefault(require("../../aplicacion/useCase/CitaUseCase"));
const CitaControllerExpress_1 = __importDefault(require("../express/controller/CitaControllerExpress"));
const CitaRouterExpress_1 = __importDefault(require("../express/router/CitaRouterExpress"));
const FactoryAgenteUseCase_1 = __importDefault(require("./FactoryAgenteUseCase"));
const FactoryCitaService_1 = __importDefault(require("./FactoryCitaService"));
const FactoryClienteUseCase_1 = __importDefault(require("./FactoryClienteUseCase"));
class FactoryCitaRouter {
    static create = () => {
        const clienteUseCase = FactoryClienteUseCase_1.default.create();
        const citaService = FactoryCitaService_1.default.create();
        const citaUseCase = new CitaUseCase_1.default(citaService, clienteUseCase);
        const adminUseCase = new AdminUseCase_1.default(citaService);
        const agenteUseCase = FactoryAgenteUseCase_1.default.create();
        const citaController = new CitaControllerExpress_1.default(citaUseCase, agenteUseCase, adminUseCase);
        return new CitaRouterExpress_1.default(citaController);
    };
}
exports.default = FactoryCitaRouter;
