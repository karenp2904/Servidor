"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullCliente_1 = __importDefault(require("../../dominio/model/cliente/NullCliente"));
class ClienteUseCase {
    clienteService;
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    obtenerClientePorCita = async (numeroCita) => {
        try {
            const cliente = await this.clienteService.obtenerClientePorCita(numeroCita);
            return cliente;
        }
        catch (error) {
            console.error('Error en obtenerClientePorCita:', error);
            return new NullCliente_1.default(); // Devuelve una instancia de NullCliente en caso de error
        }
    };
    verificarTipoClientePremium = async (cliente) => {
        try {
            if (await this.verificarEdadPremiun(cliente.getEdad())) {
                return true;
            }
            else {
                return cliente.getTipoCliente() === 'premium';
            }
        }
        catch (error) {
            console.error('Error en verificarTipoClientePremium:', error);
            return false;
        }
    };
    verificarEdadPremiun = async (edad) => {
        try {
            return edad >= 60;
        }
        catch (error) {
            console.error('Error en verificarEdadPremium:', error);
            return false;
        }
    };
    agregarCliente = async (cliente) => {
        try {
            if (cliente) {
                if (await this.verificarTipoClientePremium) {
                    cliente.setTipoCliente('premium');
                }
                else {
                    cliente.setTipoCliente('normal');
                }
            }
            console.log(cliente);
            const resultado = await this.clienteService.agregarCliente(cliente);
            return resultado;
        }
        catch (error) {
            console.error('Error en agregarCliente:', error);
            return false;
        }
    };
    modificarInformacionCliente = async (cliente) => {
        try {
            const resultado = await this.clienteService.modificarInformacionCliente(cliente);
            return resultado;
        }
        catch (error) {
            console.error('Error en modificarInformacionCliente:', error);
            return false;
        }
    };
}
exports.default = ClienteUseCase;
