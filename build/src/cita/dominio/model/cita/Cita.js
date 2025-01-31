"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cita {
    numeroCita;
    fecha;
    hora;
    lugar;
    descripcion;
    asistencia;
    tipoCita;
    anotaciones;
    cliente;
    constructor(cita) {
        this.numeroCita = cita.numeroCita;
        this.fecha = cita.fecha;
        this.hora = cita.hora;
        this.lugar = cita.lugar;
        this.descripcion = cita.descripcion;
        this.asistencia = cita.asistencia;
        this.tipoCita = cita.tipoCita;
        this.anotaciones = cita.anotaciones;
        this.cliente = cita.cliente;
    }
    isNull = () => {
        return false;
    };
    getCitaInfo() {
        return `Cita #${this.numeroCita} - ${this.fecha} ${this.hora}, Lugar: ${this.lugar}`;
    }
    getClienteInfo() {
        return `Cliente: ${this.cliente.getFullName()}`;
    }
    getNumeroCita() {
        return this.numeroCita;
    }
    setNumeroCita(value) {
        this.numeroCita = value;
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(value) {
        this.fecha = value;
    }
    getHora() {
        return this.hora;
    }
    setHora(value) {
        this.hora = value;
    }
    getLugar() {
        return this.lugar;
    }
    setLugar(value) {
        this.lugar = value;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(value) {
        this.descripcion = value;
    }
    getAsistencia() {
        return this.asistencia;
    }
    setAsistencia(value) {
        this.asistencia = value;
    }
    getTipoCita() {
        return this.tipoCita;
    }
    setTipoCita(value) {
        this.tipoCita = value;
    }
    getAnotaciones() {
        return this.anotaciones;
    }
    setAnotaciones(value) {
        this.anotaciones = value;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(value) {
        this.cliente = value;
    }
}
exports.default = Cita;
