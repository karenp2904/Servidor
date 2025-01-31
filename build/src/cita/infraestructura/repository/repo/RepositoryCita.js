"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseConexion_1 = __importDefault(require("../posgresql/DatabaseConexion"));
const DatabaseControllerCliente_1 = __importDefault(require("../posgresql/DatabaseControllerCliente"));
class RepositoryCita {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    getControllerCliente() {
        return new DatabaseControllerCliente_1.default(new DatabaseConexion_1.default());
    }
    findAll = async () => {
        try {
            const citas = await this.dbController.obtenerTodasLasCitas();
            return citas;
        }
        catch (error) {
            console.error("Error al obtener todas las citas:", error);
            throw new Error("No se pudieron obtener las citas");
        }
    };
    findById = async (id) => {
        try {
            const cita = await this.dbController.buscarCita(id);
            if (cita) {
                return cita;
            }
            else {
                console.log(`No se encontró una cita con el ID: ${id}`);
                return this.returnNullInterface();
            }
        }
        catch (error) {
            console.error("Error al buscar la cita:", error);
            return this.returnNullInterface();
        }
    };
    save = async (item) => {
        try {
            const success = await this.dbController.agendarCita(item);
            if (success) {
                return item;
            }
            else {
                console.log("No se pudo guardar la cita");
                return this.returnNullInterface();
            }
        }
        catch (error) {
            console.error("Error al guardar la cita:", error);
            return this.returnNullInterface(); // Retorna null en caso de error
        }
    };
    update = async (id, item) => {
        try {
            //cita existente
            const existingCita = await this.findById(id);
            if (!existingCita) {
                throw new Error("Cita no encontrada");
            }
            const updatedCita = { ...existingCita, ...item };
            return await this.dbController.modificarCita(updatedCita);
        }
        catch (error) {
            console.error("Error al actualizar la cita:", error);
            return false;
        }
    };
    delete = async (id) => {
        try {
            return await this.dbController.eliminarCita(id);
        }
        catch (error) {
            console.error("Error al eliminar la cita:", error);
            return false;
        }
    };
    returnNullInterface() {
        return {
            numerocita: '',
            fecha: '',
            hora: '',
            lugar: '',
            descripcion: '',
            asistencia: '',
            tipocita: '',
            anotaciones: '',
            idcliente: '',
        };
    }
}
exports.default = RepositoryCita;
