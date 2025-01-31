"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TurnoService_1 = __importDefault(require("../../aplicacion/service/TurnoService"));
const CitaUseCase_1 = __importDefault(require("../../aplicacion/useCase/CitaUseCase"));
const ColaCitasUseCase_1 = __importDefault(require("../../aplicacion/useCase/ColaCitasUseCase"));
const DatabaseConexion_1 = __importDefault(require("../repository/posgresql/DatabaseConexion"));
const DatabaseControllerTurno_1 = __importDefault(require("../repository/posgresql/DatabaseControllerTurno"));
const RepositoryTurno_1 = __importDefault(require("../repository/repo/RepositoryTurno"));
const FactoryCitaService_1 = __importDefault(require("./FactoryCitaService"));
const FactoryClienteUseCase_1 = __importDefault(require("./FactoryClienteUseCase"));
class FactoryTurnoUseCase {
    static create = () => {
        const dbConexion = new DatabaseConexion_1.default();
        const dbController = new DatabaseControllerTurno_1.default(dbConexion);
        const repositoryTurno = new RepositoryTurno_1.default(dbController);
        const turnoService = new TurnoService_1.default(repositoryTurno);
        const clienteUseCase = FactoryClienteUseCase_1.default.create();
        const citaUseCase = new CitaUseCase_1.default(FactoryCitaService_1.default.create(), clienteUseCase);
        return new ColaCitasUseCase_1.default(turnoService, clienteUseCase, citaUseCase);
    };
}
exports.default = FactoryTurnoUseCase;
