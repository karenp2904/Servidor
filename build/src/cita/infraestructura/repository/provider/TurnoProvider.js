"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Turno_1 = __importDefault(require("../../../dominio/model/turno/Turno"));
class TurnoProvider {
    static toDatabaseAttributes(turno) {
        return {
            idturno: turno.getIdTurno(),
            turno: turno.getTurno(),
            puesto: turno.getPuesto(),
            idcita: turno.getIdCita(),
        };
    }
    static fromDatabaseAttributes(attributes) {
        return new Turno_1.default({
            idTurno: attributes.idturno,
            turno: attributes.turno,
            puesto: attributes.puesto,
            idCita: attributes.idcita,
        });
    }
}
exports.default = TurnoProvider;
