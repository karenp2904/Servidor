"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = __importDefault(require("./Cita"));
const NullCliente_1 = __importDefault(require("../cliente/NullCliente"));
class NullCita extends Cita_1.default {
    constructor() {
        super({
            numeroCita: '0000',
            fecha: '0000-00-00',
            hora: '00:00',
            lugar: 'No Disponible',
            descripcion: 'No Disponible',
            asistencia: 'No Disponible',
            tipoCita: 'No Disponible',
            anotaciones: 'No Disponible',
            cliente: new NullCliente_1.default(),
        });
    }
    isNull = () => {
        return true;
    };
    setNumeroCita = (_value) => { };
    setFecha = (_value) => { };
    setHora = (_value) => { };
    setLugar = (_value) => { };
    setDescripcion = (_value) => { };
    setAsistencia = (_value) => { };
    setTipoCita = (_value) => { };
    setAnotaciones = (_value) => { };
    setCliente = (_value) => { };
}
exports.default = NullCita;
