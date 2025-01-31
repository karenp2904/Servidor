"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullCita_1 = __importDefault(require("../../dominio/model/cita/NullCita"));
const ChangeType_1 = __importDefault(require("../../infraestructura/repository/provider/ChangeType"));
const CitaProvider_1 = __importDefault(require("../../infraestructura/repository/provider/CitaProvider"));
class CitaService {
    citaRepository;
    constructor(citaRepository) {
        this.citaRepository = citaRepository;
    }
    async agendarCita(cita) {
        try {
            const clienteCita = ChangeType_1.default.getInterfaceCliente(cita.getCliente());
            console.log();
            const citaDb = {
                numerocita: cita.getNumeroCita(),
                fecha: cita.getFecha(),
                hora: cita.getHora(),
                lugar: cita.getLugar(),
                descripcion: cita.getDescripcion(),
                asistencia: cita.getAsistencia(),
                tipocita: cita.getTipoCita(),
                anotaciones: cita.getAnotaciones(),
                idcliente: clienteCita.getId(),
            };
            const respuesta = await this.citaRepository.save(citaDb);
            if (respuesta) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error al agendar cita:", error);
            return false;
        }
    }
    async modificarCita(cita) {
        try {
            const clienteCita = ChangeType_1.default.getInterfaceCliente(cita.getCliente());
            const citaDb = {
                numerocita: cita.getNumeroCita(),
                fecha: cita.getFecha(),
                hora: cita.getHora(),
                lugar: cita.getLugar(),
                descripcion: cita.getDescripcion(),
                asistencia: cita.getAsistencia(),
                tipocita: cita.getTipoCita(),
                anotaciones: cita.getAnotaciones(),
                idcliente: clienteCita.getId(),
            };
            const respuesta = await this.citaRepository.update(cita.getNumeroCita(), citaDb);
            if (respuesta) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error al modificar cita:", error);
            return false;
        }
    }
    async eliminarCita(numeroCita) {
        try {
            const respuesta = await this.citaRepository.delete(numeroCita);
            return respuesta;
        }
        catch (error) {
            console.error("Error al eliminar cita:", error);
            return false;
        }
    }
    async buscarCita(numeroCita) {
        try {
            const citaDb = await this.citaRepository.findById(numeroCita);
            if (citaDb) {
                if (citaDb.numerocita) {
                    console.log(await CitaProvider_1.default.get(citaDb) + 'en serviceCita');
                    return await CitaProvider_1.default.get(citaDb);
                }
                else {
                    return new NullCita_1.default(); //temporal
                }
            }
            else {
                return new NullCita_1.default(); //temporal
            }
        }
        catch (error) {
            console.error("Error al buscar la cita:", error);
            return new NullCita_1.default();
        }
    }
    async buscarCitasPorCliente(idCliente) {
        try {
            console.log(idCliente);
            //POR AHORA NO SE EN DONDE SE USA
            const citas = []; //temporal
            return citas;
        }
        catch (error) {
            console.error("Error al buscar citas por cliente:", error);
            return [];
        }
    }
    async listaCitas() {
        try {
            const citasData = await this.citaRepository.findAll();
            // Usa Promise.all para manejar las llamadas asíncronas de manera adecuada
            const citas = await Promise.all(citasData.map(async (citaData) => {
                return await CitaProvider_1.default.get(citaData);
                console.log(await CitaProvider_1.default.get(citaData));
            }));
            console.log(citas);
            return await citas;
        }
        catch (error) {
            console.error("Error al buscar citas:", error);
            return [];
        }
    }
}
exports.default = CitaService;
