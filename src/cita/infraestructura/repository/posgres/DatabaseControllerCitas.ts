import CitaDatabaseAtributtes from "../../../dominio/types/CitaDatabaseAttributes";
import DatabaseConexion from "./DatabaseConexion";

export default class DatabaseControllerCitas {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    public obtenerTodasLasCitas = async (): Promise<CitaDatabaseAtributtes[]> => {
        try {
            const query = `SELECT * FROM cita`;
            const results = await this.dbController.query<CitaDatabaseAtributtes>(query, []);
            return results;
        } catch (error) {
            console.error("Error al obtener todas las citas:", error);
            throw error;
        }
    };


}
