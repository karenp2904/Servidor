import NullTurno from "../../dominio/model/turno/NullTurno";
import Turno from "../../dominio/model/turno/Turno";
import TurnoRepositoryPort from "../../dominio/port/driven/TurnoRepositoryPort";
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort";
import TurnoProvider from "../../infraestructura/repository/provider/TurnoProvider";

export default class TurnoService implements ColaCitaServicePort{

    constructor(private readonly turnoRepository: TurnoRepositoryPort) {}
    
    public eliminarTurno = async (numero: string): Promise<boolean> => {
        try {
            const result = await this.turnoRepository.deleteByIdCita(numero);
            console.log(`Turno con número ${numero} eliminado`);
            return result; // Assuming delete returns a boolean indicating success
        } catch (error) {
            console.error("Error al eliminar el turno:", error);
            return false;
        }
    };

    public agregarTurno = async (turno: Turno): Promise<boolean> => {
        try {
            const respuesta= await this.turnoRepository.save(TurnoProvider.toDatabaseAttributes(turno)); 
            
            console.log("Turno agregado exitosamente " + respuesta);
            return true;
        } catch (error) {
            console.error("Error al agregar el turno:", error);
            return false;
        }
    };

    public obtenerTurnoId = async (idTurno: string): Promise<Turno> => {
        try {
            
            return TurnoProvider.fromDatabaseAttributes(await this.turnoRepository.findById(idTurno));
        } catch (error) {
            console.error("Error al agregar el turno:", error);
            return new NullTurno();
        }
    };

    public listaTurnos = async (): Promise<Turno[]> => {
        try {
            const turnosDBAttributes = await this.turnoRepository.findAll();
            const turnos = turnosDBAttributes.map(turnoDB => TurnoProvider.fromDatabaseAttributes(turnoDB));
            return turnos;
        } catch (error) {
            console.error("Error al obtener la lista de turnos:", error);
            return [];
        }
    };
    

    public modificarCola = async (lista: Turno[]): Promise<boolean> => {
        try {
            // Assuming this modifies the turnos in some way; replace with actual logic
            console.log(lista + 'service')
            for (const turno of lista) {
                console.log(turno)
                await this.turnoRepository.update(turno.getIdTurno().toString(), TurnoProvider.toDatabaseAttributes(turno)); // Assuming update method exists
            }
            console.log("Cola de turnos modificada exitosamente");
            return true;
        } catch (error) {
            console.error("Error al modificar la cola de turnos:", error);
            return false;
        }
    };

}