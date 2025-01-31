"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullCliente_1 = __importDefault(require("../../dominio/model/cliente/NullCliente"));
const ClientePorvider_1 = __importDefault(require("../../infraestructura/repository/provider/ClientePorvider"));
class ClienteService {
    clienteRepository;
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    // Adds a new cliente to the repository
    agregarCliente = async (cliente) => {
        try {
            const clienteData = {
                id: cliente.getId(),
                nombre: cliente.getNombre(),
                apellido: cliente.getApellido(),
                edad: cliente.getEdad(),
                direccion: cliente.getDireccion(),
                tipoCliente: cliente.getTipoCliente()
            };
            await this.clienteRepository.save(clienteData);
            console.log("Cliente agregado exitosamente");
            return true;
        }
        catch (error) {
            console.error("Error al agregar el cliente:", error);
            return false;
        }
    };
    // Fetches a cliente by its ID from the repository
    obtenerCliente = async (idCliente) => {
        try {
            const cliente = await this.clienteRepository.findById(idCliente);
            if (cliente) {
                const clienteType = ClientePorvider_1.default.get(cliente.id);
                if (clienteType) {
                    return clienteType;
                }
                else {
                    return new NullCliente_1.default;
                }
            }
            else {
                return new NullCliente_1.default;
            }
        }
        catch (error) {
            console.error("Error al obtener el cliente:", error);
            return new NullCliente_1.default();
        }
    };
    // Updates client information
    modificarInformacionCliente = async (cliente) => {
        try {
            const clienteData = {
                id: cliente.getId(),
                nombre: cliente.getNombre(),
                apellido: cliente.getApellido(),
                edad: cliente.getEdad(),
                direccion: cliente.getDireccion(),
                tipoCliente: cliente.getTipoCliente()
            };
            const result = await this.clienteRepository.update(clienteData.id, clienteData);
            console.log("Información del cliente actualizada exitosamente");
            return result !== null;
        }
        catch (error) {
            console.error("Error al modificar la información del cliente:", error);
            return false;
        }
    };
    obtenerClientePorCita = async (numeroCita) => {
        try {
            const cliente = await this.clienteRepository.findByCita(numeroCita);
            if (cliente) {
                const clienteType = ClientePorvider_1.default.get(cliente.id);
                if (clienteType) {
                    return clienteType;
                }
                else {
                    return new NullCliente_1.default;
                }
            }
            else {
                return new NullCliente_1.default;
            }
        }
        catch (error) {
            console.error("Error al obtener el cliente por cita:", error);
            return new NullCliente_1.default();
        }
    };
}
exports.default = ClienteService;
