"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullTurno_1 = __importDefault(require("../../dominio/model/turno/NullTurno"));
const TurnoProvider_1 = __importDefault(require("../../infraestructura/repository/provider/TurnoProvider"));
class TurnoService {
    turnoRepository;
    constructor(turnoRepository) {
        this.turnoRepository = turnoRepository;
    }
    eliminarTurno = async (numero) => {
        try {
            const result = await this.turnoRepository.deleteByIdCita(numero);
            console.log(`Turno con número ${numero} eliminado`);
            return result; // Assuming delete returns a boolean indicating success
        }
        catch (error) {
            console.error("Error al eliminar el turno:", error);
            return false;
        }
    };
    agregarTurno = async (turno) => {
        try {
            const respuesta = await this.turnoRepository.save(TurnoProvider_1.default.toDatabaseAttributes(turno));
            console.log("Turno agregado exitosamente " + respuesta);
            return true;
        }
        catch (error) {
            console.error("Error al agregar el turno:", error);
            return false;
        }
    };
    obtenerTurnoId = async (idTurno) => {
        try {
            return TurnoProvider_1.default.fromDatabaseAttributes(await this.turnoRepository.findById(idTurno));
        }
        catch (error) {
            console.error("Error al agregar el turno:", error);
            return new NullTurno_1.default();
        }
    };
    listaTurnos = async () => {
        try {
            const turnosDBAttributes = await this.turnoRepository.findAll();
            const turnos = turnosDBAttributes.map(turnoDB => TurnoProvider_1.default.fromDatabaseAttributes(turnoDB));
            return turnos;
        }
        catch (error) {
            console.error("Error al obtener la lista de turnos:", error);
            return [];
        }
    };
    modificarCola = async (lista) => {
        try {
            // Assuming this modifies the turnos in some way; replace with actual logic
            for (const turno of lista) {
                console.log(turno + 'serviceTurno');
                await this.turnoRepository.update(turno.getIdTurno().toString(), TurnoProvider_1.default.toDatabaseAttributes(turno)); // Assuming update method exists
            }
            console.log("Cola de turnos modificada exitosamente");
            return true;
        }
        catch (error) {
            console.error("Error al modificar la cola de turnos:", error);
            return false;
        }
    };
}
exports.default = TurnoService;
