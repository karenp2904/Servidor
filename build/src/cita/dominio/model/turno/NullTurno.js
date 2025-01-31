"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Turno_1 = __importDefault(require("./Turno"));
class NullTurno extends Turno_1.default {
    constructor() {
        super({
            idTurno: -1, // Valor que indica un ID no válido
            turno: 'No Disponible',
            puesto: -1,
            idCita: 'No hay'
        });
    }
    isNull = () => {
        return true;
    };
    setIdTurno = (_value) => { };
    setTurno = (_value) => { };
    setPuesto = (_value) => { };
}
exports.default = NullTurno;
