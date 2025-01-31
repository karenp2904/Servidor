"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseControllerTurno {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    // Obtener todos los turnos
    async obtenerTodosLosTurnos() {
        try {
            const query = `SELECT * FROM turno`;
            const results = await this.dbController.query(query, []);
            return results.rows;
        }
        catch (error) {
            console.error("Error al obtener todos los turnos:", error);
            return [];
        }
    }
    // Obtener turno por idTurno
    async obtenerTurnoPorId(idTurno) {
        try {
            const query = `SELECT * FROM turno WHERE idturno = $1`;
            const results = await this.dbController.query(query, [idTurno]);
            if (results.rowCount === 0) {
                console.log(`No se encontró el turno con el número ${idTurno}`);
            }
            return results.rows[0];
        }
        catch (error) {
            console.error("Error al obtener el turno por ID:", error);
            return null;
        }
    }
    // Agregar un nuevo turno
    async agregarTurno(turno) {
        try {
            const query = `
                INSERT INTO turno (turno, puesto, idcita)
                VALUES ($1, $2, $3)
            `;
            await this.dbController.query(query, [turno.turno, turno.puesto, turno.idcita]);
            console.log("Turno agregado exitosamente");
        }
        catch (error) {
            console.error("Error al agregar el turno:", error);
        }
    }
    async modificarPuestosDeTodosLosTurnos(turnos) {
        try {
            if (Array.isArray(turnos) && turnos.length > 0) {
                for (let i = 0; i < turnos.length; i++) {
                    const turno = turnos[i];
                    if (turno) {
                        const puesto = turno.puesto;
                        if (puesto !== undefined) {
                            await this.modificarPuestoTurno(turno.idturno, puesto);
                        }
                        else {
                            console.warn(`El puesto del turno en la posición ${i} es undefined.`);
                        }
                    }
                }
                console.log("Puestos de todos los turnos actualizados exitosamente");
            }
            else {
                console.warn("No se encontraron turnos para modificar.");
            }
        }
        catch (error) {
            console.error("Error al modificar puestos de todos los turnos:", error);
        }
    }
    // Modificar el puesto de un turno
    async modificarPuestoTurno(idTurno, nuevoPuesto) {
        try {
            const query = `UPDATE turno SET puesto = $1 WHERE idturno = $2`;
            await this.dbController.query(query, [nuevoPuesto, idTurno]);
            console.log(`Puesto actualizado para el turno con ID ${idTurno}`);
        }
        catch (error) {
            console.error("Error al modificar el puesto del turno:", error);
        }
    }
    // Eliminar un turno
    async eliminarTurno(idTurno) {
        try {
            const query = `DELETE FROM turno WHERE idturno = $1`;
            await this.dbController.query(query, [idTurno]);
            console.log(`Turno con ID ${idTurno} eliminado`);
        }
        catch (error) {
            console.error("Error al eliminar el turno:", error);
        }
    }
    // Eliminar un turno
    async eliminarTurnoConNumCita(idCita) {
        try {
            const query = `DELETE FROM turno WHERE idcita = $1`;
            await this.dbController.query(query, [idCita]);
            console.log(`Turno con ID ${idCita} eliminado`);
        }
        catch (error) {
            console.error("Error al eliminar el turno:", error);
        }
    }
}
exports.default = DatabaseControllerTurno;
