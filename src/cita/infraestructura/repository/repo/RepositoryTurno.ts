import TurnoRepositoryPort from "../../../dominio/port/driven/TurnoRepositoryPort";
import TurnoDatabaseAtributtes from "../../../dominio/types/TurnoDatabaseAttributes";

import DatabaseControllerTurno from "../posgresql/DatabaseControllerTurno";

export default class RepositoryTurno implements TurnoRepositoryPort {
    private dbController: DatabaseControllerTurno;

    constructor(dbController: DatabaseControllerTurno) {
        this.dbController = dbController;
    }

    // Find all turnos
    findAll = async (): Promise<TurnoDatabaseAtributtes[]> => {
        try {
            return await this.dbController.obtenerTodosLosTurnos();
        } catch (error) {
            console.error("Error al obtener todos los turnos:", error);
            throw new Error("No se pudieron obtener los turnos");
        }
    };

    // Find turno by ID
    findById = async (id: string): Promise<TurnoDatabaseAtributtes> => {
        try {
            const turno = await this.dbController.obtenerTurnoPorId(parseInt(id));
            if (turno) {
                return turno;
            } else {
                console.log(`No se encontró un turno con el ID: ${id}`);
                return this.returnNullInterface();
            }
        } catch (error) {
            console.error("Error al buscar el turno:", error);
            return this.returnNullInterface();
        }
    };

    // Save a new turno
    save = async (item: TurnoDatabaseAtributtes): Promise<TurnoDatabaseAtributtes> => {
        try {
            await this.dbController.agregarTurno(item);
            return item;
        } catch (error) {
            console.error("Error al guardar el turno:", error);
            return this.returnNullInterface();
        }
    };

    // Update a turno by ID
    update = async (id: string, item: Partial<TurnoDatabaseAtributtes>): Promise<boolean> => {
        try {
            const existingTurno = await this.findById(id);
            if (!existingTurno) {
                throw new Error("Turno no encontrado");
            }

            const updatedTurno = { ...existingTurno, ...item };
            await this.dbController.modificarPuestoTurno(updatedTurno.idturno, updatedTurno.puesto!);
            return true;
        } catch (error) {
            console.error("Error al actualizar el turno:", error);
            return false;
        }
    };

     // Update all turnos
    updateAll = async (items: Partial<TurnoDatabaseAtributtes>[]): Promise<boolean[]> => {
        const results: boolean[] = [];

        try {
            for (const item of items) {
                if (item.idturno) {
                    const updated = await this.update(item.idturno.toString(), item);
                    results.push(updated);
                } else {
                    console.warn("No se encontró idTurno en el item:", item);
                    results.push(false);
                }
            }
            return results;
        } catch (error) {
            console.error("Error al actualizar todos los turnos:", error);
            return results; // Return the results collected so far
        }
    };

    delete = async (id: string): Promise<boolean> => {
        try {
            await this.dbController.eliminarTurno(parseInt(id));
            return true;
        } catch (error) {
            console.error("Error al eliminar el turno:", error);
            return false;
        }
    };

    deleteByIdCita = async (id: string): Promise<boolean> => {
        try {
            await this.dbController.eliminarTurnoConNumCita(id);
            return true;
        } catch (error) {
            console.error("Error al eliminar el turno:", error);
            return false;
        }
    };

    private returnNullInterface(): TurnoDatabaseAtributtes {
        return {
            idturno: 0,
            turno: '',
            puesto: 0,
            idcita: '',
        } as TurnoDatabaseAtributtes;
    }
}
