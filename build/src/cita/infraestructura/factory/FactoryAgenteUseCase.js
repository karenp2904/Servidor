"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TurnoService_1 = __importDefault(require("../../aplicacion/service/TurnoService"));
const AgenteUseCase_1 = __importDefault(require("../../aplicacion/useCase/AgenteUseCase"));
const DatabaseConexion_1 = __importDefault(require("../repository/posgresql/DatabaseConexion"));
const DatabaseControllerTurno_1 = __importDefault(require("../repository/posgresql/DatabaseControllerTurno"));
const RepositoryTurno_1 = __importDefault(require("../repository/repo/RepositoryTurno"));
const FactoryCitaService_1 = __importDefault(require("./FactoryCitaService"));
class FactoryAgenteUseCase {
    static create = () => {
        const dbConexion = new DatabaseConexion_1.default();
        const dbController = new DatabaseControllerTurno_1.default(dbConexion);
        const turnoRepository = new RepositoryTurno_1.default(dbController);
        const colaCitaService = new TurnoService_1.default(turnoRepository);
        const citaService = FactoryCitaService_1.default.create();
        return new AgenteUseCase_1.default(colaCitaService, citaService);
    };
}
exports.default = FactoryAgenteUseCase;
