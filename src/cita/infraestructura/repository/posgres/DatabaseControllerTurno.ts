import TurnoDatabaseAttributes from "../../../dominio/types/TurnoDatabaseAttributes";
import DatabaseConexion from "./DatabaseConexion";

export default class DatabaseControllerTurno {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Obtener turno por idTurno
    public async obtenerTurnoPorId(idTurno: number): Promise<TurnoDatabaseAttributes> {
        try {
            const query = `SELECT * FROM turno WHERE idTurno = $1`;
            const results = await this.dbController.query<TurnoDatabaseAttributes>(query, [idTurno]);
            if (results.length === 0) {
                console.log(`No se encontró el turno con el número ${idTurno}`);
            }
    
            return results[0]!;
        } catch (error) {
            console.error("Error al obtener el turno por ID:", error);
            throw error; // Lanza una excepción para manejo de errores en nivel superior
        }
    }
    
}