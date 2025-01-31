"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cita_1 = __importDefault(require("../../../dominio/model/cita/Cita"));
const NullCita_1 = __importDefault(require("../../../dominio/model/cita/NullCita"));
const ClientePorvider_1 = __importDefault(require("./ClientePorvider"));
class CitaProvider {
    static get = async (citaData) => {
        try {
            const { numerocita, fecha, hora, lugar, descripcion, asistencia, tipocita, anotaciones, idcliente } = citaData;
            const clienteInstance = await ClientePorvider_1.default.get(idcliente);
            console.log(clienteInstance);
            // Crea una nueva instancia de Cita
            return new Cita_1.default({
                numeroCita: numerocita,
                fecha,
                hora,
                lugar,
                descripcion,
                asistencia,
                tipoCita: tipocita,
                anotaciones,
                cliente: clienteInstance,
            });
        }
        catch (error) {
            console.error(`Error al obtener el cliente con ID :`, error);
            return new NullCita_1.default(); // Retorna NullCita en caso de error
        }
    };
}
exports.default = CitaProvider;
