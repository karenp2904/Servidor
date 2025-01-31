"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    idUsuario;
    usuario;
    contraseña;
    rol;
    constructor(usuarioAttributes) {
        this.idUsuario = usuarioAttributes.idUsuario;
        this.usuario = usuarioAttributes.usuario;
        this.contraseña = usuarioAttributes.contraseña;
        this.rol = usuarioAttributes.rol;
    }
    isNull = () => {
        return false;
    };
    // Método para obtener información básica del usuario sin contraseña
    getUsuarioInfo() {
        return `ID: ${this.idUsuario}, Usuario: ${this.usuario}, Rol: ${this.rol}`;
    }
    // Método para verificar el rol del usuario
    esAdmin() {
        return this.rol === 'admin';
    }
    getIdUsuario() {
        return this.idUsuario;
    }
    setIdUsuario(value) {
        this.idUsuario = value;
    }
    getUsuario() {
        return this.usuario;
    }
    setUsuario(value) {
        this.usuario = value;
    }
    getContraseña() {
        return this.contraseña;
    }
    setContraseña(value) {
        this.contraseña = value;
    }
    getRol() {
        return this.rol;
    }
    setRol(value) {
        this.rol = value;
    }
}
exports.default = Usuario;
