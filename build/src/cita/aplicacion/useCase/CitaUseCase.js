"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullCita_1 = __importDefault(require("../../dominio/model/cita/NullCita"));
const ChangeType_1 = __importDefault(require("../../infraestructura/repository/provider/ChangeType"));
class CitaUseCase {
    citaService;
    clienteUseCase;
    constructor(citaService, clienteUseCase) {
        this.citaService = citaService;
        this.clienteUseCase = clienteUseCase;
    }
    agendarCita = async (cita, cliente) => {
        try {
            const clienteAgregar = ChangeType_1.default.getInterfaceCliente(cliente);
            const agregarCliente = await this.clienteUseCase.agregarCliente(clienteAgregar);
            console.log(agregarCliente);
            const citaAgendar = ChangeType_1.default.getInterfaceCita(cita);
            const respuesta = await this.citaService.agendarCita(citaAgendar);
            console.log('agendarCitaUse:', respuesta);
            if (respuesta) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error('Error en agendarCitaUse:', error);
            return false;
        }
    };
    modificarCita = async (cita) => {
        try {
            const citaType = ChangeType_1.default.getInterfaceCita(cita);
            const clienteModificar = ChangeType_1.default.getInterfaceCliente(citaType.getCliente());
            await this.clienteUseCase.modificarInformacionCliente(clienteModificar);
            const respuesta = await this.citaService.modificarCita(citaType);
            console.log('modificarCitaUse:', respuesta);
            return respuesta;
        }
        catch (error) {
            console.error('Error en modificarCitaUse:', error);
            return false;
        }
    };
    eliminarCita = async (numeroCita) => {
        try {
            const respuesta = await this.citaService.eliminarCita(numeroCita);
            console.log('eliminarCitaUse:', respuesta);
            return respuesta;
        }
        catch (error) {
            console.error('Error en eliminarCitaUse:', error);
            return false;
        }
    };
    buscarCita = async (numeroCita) => {
        try {
            const cita = await this.citaService.buscarCita(numeroCita);
            return cita; // Devuelve la cita encontrada
        }
        catch (error) {
            console.error('Error en buscarCita:', error);
            return new NullCita_1.default(); // Devuelve una instancia de NullCita en caso de error
        }
    };
    buscarCitasPorCliente = async (cliente) => {
        try {
            const citas = await this.citaService.buscarCitasPorCliente(cliente.getId());
            return citas; // Devuelve las citas encontradas
        }
        catch (error) {
            console.error('Error en buscarCitasPorCliente:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    };
}
exports.default = CitaUseCase;
