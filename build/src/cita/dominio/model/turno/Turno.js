"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turno {
    idTurno;
    turno;
    puesto;
    idCita;
    constructor(turnoAttributes) {
        this.idTurno = turnoAttributes.idTurno;
        this.turno = turnoAttributes.turno;
        this.puesto = turnoAttributes.puesto;
        this.idCita = turnoAttributes.idCita;
    }
    isNull = () => {
        return false;
    };
    // Método para obtener información completa del turno
    getTurnoInfo() {
        return `ID Turno: ${this.idTurno}, Turno: ${this.turno}`;
    }
    getIdTurno() {
        return this.idTurno;
    }
    setIdTurno(value) {
        this.idTurno = value;
    }
    getTurno() {
        return this.turno;
    }
    setTurno(value) {
        this.turno = value;
    }
    getPuesto() {
        return this.puesto;
    }
    setPuesto(value) {
        this.puesto = value;
    }
    getIdCita() {
        return this.idCita;
    }
    setIdCita(value) {
        this.idCita = value;
    }
}
exports.default = Turno;
