import Cita from "../../dominio/model/cita/Cita";
import NullCita from "../../dominio/model/cita/NullCita";
import Cliente from "../../dominio/model/cliente/Cliente";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort";

export default class CitaService implements CitaServicePort {
    

    constructor(private readonly : port) {}


    public async agendarCita(cita: Cita): Promise<boolean> {
        try {

            return true;
        } catch (error) {
            console.error("Error al agendar cita:", error);
            return false;
        }
    } 
    
    public async modificarCita(cita: Cita): Promise<boolean> {
        try {



            return true;
        } catch (error) {
            console.error("Error al modificar cita:", error);
            return false;
        }
    }

    public async eliminarCita(numeroCita: string): Promise<boolean> {
        try {


            return true;
        } catch (error) {
            console.error("Error al eliminar cita:", error);
            return false;
        }
    }

    public async buscarCita(numeroCita: string): Promise<Cita > {
        try {
            
                return new NullCita() //temporal
            
        } catch (error) {
            console.error("Error al buscar la cita:", error);
            return new NullCita();
        }
    }

    public async buscarCitasPorCliente(idCliente: string): Promise<Cita[]> {
        try {


            const citas: Cita[] = []; //temporal
            
            return citas;
        } catch (error) {
            console.error("Error al buscar citas por cliente:", error);
            return [];
        }
    }
}
