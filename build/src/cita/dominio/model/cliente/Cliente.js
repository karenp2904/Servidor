"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    id;
    nombre;
    apellido;
    edad;
    direccion;
    tipoCliente;
    constructor(cliente) {
        this.id = cliente.id;
        this.nombre = cliente.nombre;
        this.apellido = cliente.apellido;
        this.edad = cliente.edad;
        this.direccion = cliente.direccion;
        this.tipoCliente = cliente.tipoCliente || '';
    }
    isNull = () => {
        return false;
    };
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    getInfo() {
        return `ID: ${this.id}, Nombre: ${this.getFullName()}, Edad: ${this.edad}, Dirección: ${this.direccion}`;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(value) {
        this.nombre = value;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(value) {
        this.apellido = value;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(value) {
        this.edad = value;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(value) {
        this.direccion = value;
    }
    getTipoCliente() {
        return this.tipoCliente || '';
    }
    setTipoCliente(value) {
        this.tipoCliente = value;
    }
}
exports.default = Cliente;
