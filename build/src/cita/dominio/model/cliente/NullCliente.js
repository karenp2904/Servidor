"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
class NullCliente extends Cliente_1.default {
    constructor() {
        super({
            id: '0000',
            nombre: 'No Disponible',
            apellido: 'No Disponible',
            edad: 0,
            direccion: 'No Disponible',
            tipoCliente: 'No Disponible'
        });
    }
    isNull = () => {
        return true;
    };
    setId = (_value) => { };
    setNombre = (_value) => { };
    setApellido = (_value) => { };
    setEdad = (_value) => { };
    setDireccion = (_value) => { };
    setTipoCliente = (_value) => { };
}
exports.default = NullCliente;
