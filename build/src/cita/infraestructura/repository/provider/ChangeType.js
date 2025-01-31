"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = __importDefault(require("../../../dominio/model/cita/Cita"));
const Cliente_1 = __importDefault(require("../../../dominio/model/cliente/Cliente"));
const Turno_1 = __importDefault(require("../../../dominio/model/turno/Turno"));
class ChangeProvider {
    static getInterfaceCita(cita) {
        return new Cita_1.default({
            numeroCita: cita.numeroCita,
            fecha: cita.fecha,
            hora: cita.hora,
            lugar: cita.lugar,
            descripcion: cita.descripcion,
            asistencia: cita.asistencia || '',
            tipoCita: cita.tipoCita,
            anotaciones: cita.anotaciones || '',
            cliente: cita.cliente,
        });
    }
    static getInterfaceCliente(data) {
        return new Cliente_1.default({
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            direccion: data.direccion,
            tipoCliente: data.tipoCliente || '' // Si existe, se asigna
        });
    }
    static getInterfaceTurno(data) {
        return new Turno_1.default({
            idTurno: data.idTurno,
            idCita: data.idCita,
            puesto: data.puesto,
            turno: data.turno,
        });
    }
}
exports.default = ChangeProvider;
