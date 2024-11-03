import CitaDatabaseAtributtes from "../../../dominio/types/CitaDatabaseAttributes";
import DatabaseConexion from "./DatabaseConexion";

export default class DatabaseControllerCita {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    public agendarCita = async (atributosCita: CitaDatabaseAtributtes): Promise<boolean> => {
        try {
            const query = `INSERT INTO cita (numeroCita, fecha, hora, lugar, descripcion, asistencia, tipoCita, anotaciones, cliente, turno)
                            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
            const values = [
                atributosCita.numeroCita,
                atributosCita.fecha,
                atributosCita.hora,
                atributosCita.lugar,
                atributosCita.descripcion,
                atributosCita.asistencia,
                atributosCita.tipoCita,
                atributosCita.anotaciones,
                atributosCita.clienteId,
                atributosCita.turnoId
            ];

            await this.dbController.query(query, values);
            return true;
        } catch (error) {
            console.error("Error al agendar la cita:", error);
            return false; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };

    public modificarCita = async (atributosCita: CitaDatabaseAtributtes): Promise<boolean> => {
        try {
            const query = `UPDATE cita SET fecha = $1, hora = $2, lugar = $3, descripcion = $4,
                            asistencia = $5, tipoCita = $6, anotaciones = $7, cliente = $8, turno = $9
                            WHERE numeroCita = $10`;
            const values = [
                atributosCita.fecha,
                atributosCita.hora,
                atributosCita.lugar,
                atributosCita.descripcion,
                atributosCita.asistencia,
                atributosCita.tipoCita,
                atributosCita.anotaciones,
                atributosCita.clienteId,
                atributosCita.turnoId,
                atributosCita.numeroCita
            ];

            await this.dbController.query(query, values);
            return true;
        } catch (error) {
            console.error("Error al modificar la cita:", error);
            return false; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };

    public eliminarCita = async (numeroCita: string): Promise<boolean> => {
        try {
            const query = `DELETE FROM cita WHERE numeroCita = $1`;
            await this.dbController.query(query, [numeroCita]);
            return true;
        } catch (error) {
            console.error("Error al eliminar la cita:", error);
            return false; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };

    public buscarCita = async (numeroCita: string): Promise<CitaDatabaseAtributtes> => {
        try {
            const query = `SELECT * FROM cita WHERE numeroCita = $1`;
            const results = await this.dbController.query<CitaDatabaseAtributtes>(query, [numeroCita]);
    
            if (results.length === 0) {
                console.log(`No se encontró una cita con el número ${numeroCita}`);
            }
    
            return results[0]!;
        } catch (error) {
            console.error("Error al buscar la cita:", error);
            throw error;
        }
    };
    
    

    public buscarCitasPorCliente = async (clienteId: string): Promise<CitaDatabaseAtributtes[]> => {
        try {
            const query = `SELECT * FROM cita WHERE cliente = $1`;
            const results = await this.dbController.query<CitaDatabaseAtributtes>(query, [clienteId]);
            return results;
        } catch (error) {
            console.error("Error al buscar citas por cliente:", error);
            return []; // O lanza una excepción si prefieres manejarlo de otra forma
        }
    };
}
