"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullTurno_1 = __importDefault(require("../../dominio/model/turno/NullTurno"));
const Turno_1 = __importDefault(require("../../dominio/model/turno/Turno"));
const ChangeType_1 = __importDefault(require("../../infraestructura/repository/provider/ChangeType"));
class ColaCitasUseCase {
    colaCitaService;
    clienteUseCase;
    citaUseCase;
    constructor(colaCitaService, clienteUseCase, citaUseCase) {
        this.colaCitaService = colaCitaService;
        this.clienteUseCase = clienteUseCase;
        this.citaUseCase = citaUseCase;
    }
    listaTurnos = async () => {
        try {
            const citasData = await this.colaCitaService.listaTurnos();
            return citasData;
        }
        catch (error) {
            console.error('Error en listaTurnos:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    };
    modificarCola = async (lista) => {
        try {
            const nuevaLista = lista.map(item => ChangeType_1.default.getInterfaceTurno(item));
            console.log('Lista de turnos actualizada:', nuevaLista);
            const resultado = await this.colaCitaService.modificarCola(nuevaLista);
            return resultado;
        }
        catch (error) {
            console.error('Error en modificarCola:', error);
            return false;
        }
    };
    agregarTurno = async (cita) => {
        try {
            // Obtiene el cliente de la cita
            const citaChange = ChangeType_1.default.getInterfaceCita(cita);
            const cliente = await this.clienteUseCase.obtenerClientePorCita(citaChange.getNumeroCita().toString());
            console.log(cliente);
            const esClientePremium = await this.verificarPrioridad(cliente);
            const listaTurnos = await this.listaTurnos();
            // Crear el nuevo turno
            const turno = {
                idTurno: listaTurnos.length + 1,
                turno: `${await this.generarTurno(esClientePremium)}`,
                puesto: 0, // Se asignará después de ordenar
                idCita: citaChange.getNumeroCita()
            };
            const nuevoTurno = new Turno_1.default(turno);
            // Insertar en la posición adecuada según prioridad
            if (esClientePremium) {
                // Insertar al inicio de los turnos premium
                const indiceNoPremium = listaTurnos.findIndex(t => t.getTurno().startsWith('P'));
                if (indiceNoPremium !== -1) {
                    listaTurnos.splice(indiceNoPremium, 0, nuevoTurno); // Insertar antes del primer no-premium
                }
                else {
                    listaTurnos.push(nuevoTurno); // Si todos son premium, agregar al final
                }
            }
            else {
                // Agregar al final de la cola
                listaTurnos.push(nuevoTurno);
            }
            console.log(listaTurnos);
            // Reasignar puestos después de la inserción
            listaTurnos.forEach((t, index) => t.setPuesto(index + 1));
            // Guardar la lista modificada
            await this.modificarCola(listaTurnos);
            return nuevoTurno;
        }
        catch (error) {
            console.error('Error en agregarTurno:', error);
            return new NullTurno_1.default();
        }
    };
    verificarPrioridad = async (cliente) => {
        try {
            // Verifica si el cliente es premium
            const prioridad = await this.clienteUseCase.verificarTipoClientePremium(cliente);
            return prioridad;
        }
        catch (error) {
            console.error('Error en verificarPrioridad:', error);
            return false;
        }
    };
    obtenerTurno = async (numeroCita) => {
        try {
            const cita = await this.citaUseCase.buscarCita(numeroCita);
            if (!cita)
                return new NullTurno_1.default();
            const turno = await this.agregarTurno(cita);
            const agregado = await this.colaCitaService.agregarTurno(turno);
            console.log(agregado);
            return turno;
        }
        catch (error) {
            console.error('Error en obtenerTurno:', error);
            return new NullTurno_1.default();
        }
    };
    obtenerTurnoId = async (idTurno) => {
        try {
            const turno = await this.colaCitaService.obtenerTurnoId(idTurno);
            if (!turno)
                return new NullTurno_1.default();
            return turno;
        }
        catch (error) {
            console.error('Error en obtenerTurno:', error);
            return new NullTurno_1.default();
        }
    };
    generarTurno = async (esClientePremium) => {
        const listaTurnos = await this.listaTurnos();
        // Separar los turnos premium y no premium
        const turnosPremium = listaTurnos.filter(turno => turno.getTurno().startsWith('P'));
        const turnosNoPremium = listaTurnos.filter(turno => turno.getTurno().startsWith('G'));
        let nuevoTurno;
        if (esClientePremium) {
            // Para clientes premium, el turno tendrá el prefijo 'P' seguido de un número incrementado
            const siguienteNumero = turnosPremium.length + 1;
            nuevoTurno = `P-${siguienteNumero}`;
        }
        else {
            // Para clientes normales, el turno tendrá el prefijo 'G' seguido de un número incrementado
            const siguienteNumero = turnosNoPremium.length + 1;
            nuevoTurno = `G-${siguienteNumero}`;
        }
        return nuevoTurno;
    };
    eliminarTurno = async (numeroCita) => {
        try {
            const resultado = await this.colaCitaService.eliminarTurno(numeroCita);
            return resultado;
        }
        catch (error) {
            console.error('Error en eliminarTurno:', error);
            return false;
        }
    };
}
exports.default = ColaCitasUseCase;
