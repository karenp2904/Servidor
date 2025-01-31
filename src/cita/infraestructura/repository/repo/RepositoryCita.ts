import CitaRepositoryPort from "../../../dominio/port/driven/CitaRepositoryPort";
import CitaDatabaseAtributtes from "../../../dominio/types/CitaDatabaseAttributes";
import DatabaseConexion from "../posgresql/DatabaseConexion";
import DatabaseControllerCita from "../posgresql/DatabaseControllerCita";
import DatabaseControllerClientes from "../posgresql/DatabaseControllerCliente";

export default class RepositoryCita implements CitaRepositoryPort {
    private dbController: DatabaseControllerCita;


    constructor(dbController: DatabaseControllerCita) {
        this.dbController = dbController;
    }

    getControllerCliente(): DatabaseControllerClientes{
        return new DatabaseControllerClientes(new DatabaseConexion())
    }

    findAll = async (): Promise<CitaDatabaseAtributtes[]> => {
        try {
            const citas = await this.dbController.obtenerTodasLasCitas();
            return citas;
        } catch (error) {
            console.error("Error al obtener todas las citas:", error);
            throw new Error("No se pudieron obtener las citas");
        }
    };

    findById = async (id: string): Promise<CitaDatabaseAtributtes> => {
        try {
            const cita = await this.dbController.buscarCita(id);
            if (cita) {
                return cita; 
            } else {
                console.log(`No se encontró una cita con el ID: ${id}`);
                return this.returnNullInterface(); 
            }
        } catch (error) {
            console.error("Error al buscar la cita:", error)
            return this.returnNullInterface(); 
        }
    };


    
    save = async (item: CitaDatabaseAtributtes): Promise<CitaDatabaseAtributtes> => {
        try {
            const success = await this.dbController.agendarCita(item);
            if (success) {
                return item; 
            } else {
                console.log("No se pudo guardar la cita");
                return this.returnNullInterface(); 
            }
        } catch (error) {
            console.error("Error al guardar la cita:", error);
            return this.returnNullInterface(); // Retorna null en caso de error
        }
    };
    

    update = async (id: string, item: Partial<CitaDatabaseAtributtes>): Promise<boolean> => {
        try {
            //cita existente
            const existingCita = await this.findById(id);
            if (!existingCita) {
                throw new Error("Cita no encontrada");
            }

            const updatedCita = { ...existingCita, ...item };

            return await this.dbController.modificarCita(updatedCita);
        } catch (error) {
            console.error("Error al actualizar la cita:", error);
            return false
        }
    };

    delete = async (id: string): Promise<boolean> => {
        try {
            return await this.dbController.eliminarCita(id);
        } catch (error) {
            console.error("Error al eliminar la cita:", error);
            return false
        }
    };

    returnNullInterface(): CitaDatabaseAtributtes {
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
        } as CitaDatabaseAtributtes; 
    }
}
