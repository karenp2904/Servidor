"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteService_1 = __importDefault(require("../../aplicacion/service/ClienteService"));
const ClienteUseCase_1 = __importDefault(require("../../aplicacion/useCase/ClienteUseCase"));
const DatabaseConexion_1 = __importDefault(require("../repository/posgresql/DatabaseConexion"));
const DatabaseControllerCliente_1 = __importDefault(require("../repository/posgresql/DatabaseControllerCliente"));
const RepositoryCliente_1 = __importDefault(require("../repository/repo/RepositoryCliente"));
class FactoryClienteUseCase {
    static create = () => {
        const dbConexion = new DatabaseConexion_1.default();
        const dbControllerC = new DatabaseControllerCliente_1.default(dbConexion);
        const clienteRepository = new RepositoryCliente_1.default(dbControllerC);
        const clienteService = new ClienteService_1.default(clienteRepository);
        return new ClienteUseCase_1.default(clienteService);
    };
}
exports.default = FactoryClienteUseCase;
