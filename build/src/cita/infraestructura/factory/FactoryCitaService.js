"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CitaService_1 = __importDefault(require("../../aplicacion/service/CitaService"));
const DatabaseConexion_1 = __importDefault(require("../repository/posgresql/DatabaseConexion"));
const DatabaseControllerCita_1 = __importDefault(require("../repository/posgresql/DatabaseControllerCita"));
const RepositoryCita_1 = __importDefault(require("../repository/repo/RepositoryCita"));
class FactoryCitaService {
    static create = () => {
        const dbConexion = new DatabaseConexion_1.default();
        const dbControllerCita = new DatabaseControllerCita_1.default(dbConexion);
        const citaRepository = new RepositoryCita_1.default(dbControllerCita);
        return new CitaService_1.default(citaRepository);
    };
}
exports.default = FactoryCitaService;
