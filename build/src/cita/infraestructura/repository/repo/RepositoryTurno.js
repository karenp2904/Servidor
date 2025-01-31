"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryTurno {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    // Find all turnos
    findAll = async () => {
        try {
            return await this.dbController.obtenerTodosLosTurnos();
        }
        catch (error) {
            console.error("Error al obtener todos los turnos:", error);
            throw new Error("No se pudieron obtener los turnos");
        }
    };
    // Find turno by ID
    findById = async (id) => {
        try {
            const turno = await this.dbController.obtenerTurnoPorId(parseInt(id));
            if (turno) {
                return turno;
            }
            else {
                console.log(`No se encontró un turno con el ID: ${id}`);
                return this.returnNullInterface();
            }
        }
        catch (error) {
            console.error("Error al buscar el turno:", error);
            return this.returnNullInterface();
        }
    };
    // Save a new turno
    save = async (item) => {
        try {
            await this.dbController.agregarTurno(item);
            return item;
        }
        catch (error) {
            console.error("Error al guardar el turno:", error);
            return this.returnNullInterface();
        }
    };
    // Update a turno by ID
    update = async (id, item) => {
        try {
            const existingTurno = await this.findById(id);
            if (!existingTurno) {
                throw new Error("Turno no encontrado");
            }
            const updatedTurno = { ...existingTurno, ...item };
            await this.dbController.modificarPuestoTurno(updatedTurno.idturno, updatedTurno.puesto);
            return true;
        }
        catch (error) {
            console.error("Error al actualizar el turno:", error);
            return false;
        }
    };
    // Update all turnos
    updateAll = async (items) => {
        const results = [];
        try {
            for (const item of items) {
                if (item.idturno) {
                    const updated = await this.update(item.idturno.toString(), item);
                    results.push(updated);
                }
                else {
                    console.warn("No se encontró idTurno en el item:", item);
                    results.push(false);
                }
            }
            return results;
        }
        catch (error) {
            console.error("Error al actualizar todos los turnos:", error);
            return results; // Return the results collected so far
        }
    };
    delete = async (id) => {
        try {
            await this.dbController.eliminarTurno(parseInt(id));
            return true;
        }
        catch (error) {
            console.error("Error al eliminar el turno:", error);
            return false;
        }
    };
    deleteByIdCita = async (id) => {
        try {
            await this.dbController.eliminarTurnoConNumCita(id);
            return true;
        }
        catch (error) {
            console.error("Error al eliminar el turno:", error);
            return false;
        }
    };
    returnNullInterface() {
        return {
            idturno: 0,
            turno: '',
            puesto: 0,
            idcita: '',
        };
    }
}
exports.default = RepositoryTurno;
