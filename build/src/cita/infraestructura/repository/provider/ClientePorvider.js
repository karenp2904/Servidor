"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("../../../dominio/model/cliente/Cliente"));
const NullCliente_1 = __importDefault(require("../../../dominio/model/cliente/NullCliente"));
const DatabaseConexion_1 = __importDefault(require("../posgresql/DatabaseConexion"));
const DatabaseControllerCliente_1 = __importDefault(require("../posgresql/DatabaseControllerCliente"));
const RepositoryCliente_1 = __importDefault(require("../repo/RepositoryCliente"));
class ClienteProvider {
    static get = async (idCliente) => {
        const repoCliente = new RepositoryCliente_1.default(new DatabaseControllerCliente_1.default(new DatabaseConexion_1.default()));
        const clienteData = await repoCliente.findById(idCliente);
        if (!clienteData) {
            return new NullCliente_1.default();
        }
        return new Cliente_1.default({
            id: clienteData.id,
            nombre: clienteData.nombre,
            apellido: clienteData.apellido,
            edad: clienteData.edad,
            direccion: clienteData.direccion,
            tipoCliente: clienteData.tipoCliente || ''
        });
    };
}
exports.default = ClienteProvider;
