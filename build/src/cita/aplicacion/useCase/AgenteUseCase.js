"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChangeType_1 = __importDefault(require("../../infraestructura/repository/provider/ChangeType"));
class AgenteUseCase {
    colaCitaService;
    citaService;
    constructor(colaCitaService, // Inyectar el servicio de ColaCita
    citaService) {
        this.colaCitaService = colaCitaService;
        this.citaService = citaService;
    }
    obtenerCola = async () => {
        return await this.colaCitaService.listaTurnos(); // Obtener la lista de turnos actual desde el servicio
    };
    modificarCola = async (lista) => {
        try {
            const nuevaLista = lista.map(item => ChangeType_1.default.getInterfaceTurno(item));
            console.log('Lista de turnos actualizada:', nuevaLista);
            // Reasignar los puestos según el nuevo orden en la lista
            nuevaLista.forEach((turno, index) => {
                turno.setPuesto(index + 1); // Asigna la posición empezando desde 1
            });
            console.log('listamodificada' + nuevaLista);
            const resultado = await this.colaCitaService.modificarCola(nuevaLista);
            return resultado; // Retorna el resultado del servicio
        }
        catch (error) {
            console.error('Error en modificarCola:', error);
            return false; // Retorna false en caso de error
        }
    };
    completarCita = async (cita) => {
        try {
            const citaType = ChangeType_1.default.getInterfaceCita(cita);
            const resultado = await this.citaService.modificarCita(citaType);
            return resultado; // Retorna el resultado del servicio
        }
        catch (error) {
            console.error('Error en completar:', error);
            return false; // Retorna false en caso de error
        }
    };
    eliminarTurno = async (numeroCita) => {
        try {
            const resultado = await this.colaCitaService.eliminarTurno(numeroCita);
            return resultado; // Retorna el resultado del servicio
        }
        catch (error) {
            console.error('Error en completar:', error);
            return false; // Retorna false en caso de error
        }
    };
}
exports.default = AgenteUseCase;
