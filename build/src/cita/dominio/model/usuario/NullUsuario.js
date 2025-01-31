"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class NullUsuario extends Usuario_1.default {
    constructor() {
        super({
            idUsuario: -1,
            usuario: 'Desconocido',
            contraseña: '',
            rol: 'agente' // rol por defecto
        });
    }
    isNull = () => {
        return true;
    };
    setIdUsuario = (_value) => { };
    setUsuario = (_value) => { };
    setContraseña = (_value) => { };
    setRol = (_value) => { };
}
exports.default = NullUsuario;
