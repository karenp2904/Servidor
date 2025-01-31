"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseControllerCita {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    agendarCita = async (atributosCita) => {
        try {
            const query = `INSERT INTO cita (numerocita, fecha, hora, lugar, descripcion, asistencia, tipoCita, anotaciones, idcliente)
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
            const values = [
                atributosCita.numerocita,
                atributosCita.fecha,
                atributosCita.hora,
                atributosCita.lugar,
                atributosCita.descripcion,
                atributosCita.asistencia,
                atributosCita.tipocita,
                atributosCita.anotaciones,
                atributosCita.idcliente
            ];
            await this.dbController.query(query, values);
            return true;
        }
        catch (error) {
            console.error("Error al agendar la cita:", error);
            return false; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };
    modificarCita = async (atributosCita) => {
        try {
            const query = `UPDATE cita SET fecha = $1, hora = $2, lugar = $3, descripcion = $4,
                            asistencia = $5, tipoCita = $6, anotaciones = $7, idcliente = $8
                            WHERE numerocita = $9`;
            const values = [
                atributosCita.fecha,
                atributosCita.hora,
                atributosCita.lugar,
                atributosCita.descripcion,
                atributosCita.asistencia,
                atributosCita.tipocita,
                atributosCita.anotaciones,
                atributosCita.idcliente,
                atributosCita.numerocita
            ];
            await this.dbController.query(query, values);
            return true;
        }
        catch (error) {
            console.error("Error al modificar la cita:", error);
            return false; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };
    eliminarCita = async (numeroCita) => {
        try {
            console.log("Eliminando cita con numeroCita:", numeroCita);
            const query = `DELETE FROM cita WHERE numerocita = $1`;
            const respuesta = await this.dbController.query(query, [numeroCita]);
            console.log("Resultado de la eliminación:", respuesta); // Verifica la respuesta
            // Revisa el valor de rowCount para ver cuántas filas se eliminaron
            if (respuesta.rowCount > 0) {
                console.log("Cita eliminada con éxito.");
                return true; // Cita eliminada
            }
            else {
                console.log("No se encontró ninguna cita con ese número.");
                return false; // No se encontró la cita
            }
        }
        catch (error) {
            console.error("Error al eliminar la cita:", error);
            return false;
        }
    };
    buscarCita = async (numerocita) => {
        try {
            const query = `SELECT * FROM cita WHERE numeroCita = $1`;
            const results = await this.dbController.query(query, [numerocita]);
            if (results.rowCount === 0) {
                console.log(`No se encontró una cita con el número ${numerocita}`);
            }
            return results.rows[0];
        }
        catch (error) {
            console.error("Error al buscar la cita:", error);
            throw null;
        }
    };
    buscarCitasPorCliente = async (clienteId) => {
        try {
            const query = `SELECT * FROM cita WHERE cliente = $1`;
            const results = await this.dbController.query(query, [clienteId]);
            return results.rows;
            ;
        }
        catch (error) {
            console.error("Error al buscar citas por cliente:", error);
            return []; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };
    obtenerTodasLasCitas = async () => {
        try {
            const query = `SELECT * FROM cita`;
            const results = await this.dbController.query(query, []);
            return results.rows;
            ;
        }
        catch (error) {
            console.error("Error al obtener todas las citas:", error);
            return [];
        }
    };
}
exports.default = DatabaseControllerCita;
