import DatabaseConexion from "./DatabaseConexion";
import ClienteDatabaseAttributes from "../../../dominio/types/ClienteDatabaseAttributes";

export default class DatabaseControllerClientes {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Agregar un nuevo cliente
    public async agregarCliente(atributosCliente: ClienteDatabaseAttributes): Promise<boolean> {
        try {
            const query = `INSERT INTO cliente (id, nombre, apellido, edad, direccion, tipoCliente)
                            VALUES ($1, $2, $3, $4, $5, $6)`;
            const values = [
                atributosCliente.id, atributosCliente.nombre, atributosCliente.apellido,
                atributosCliente.edad, atributosCliente.direccion, atributosCliente.tipoCliente
            ];
            await this.dbController.query(query, values);
            return true;
        } catch (error) {
            console.error("Error al agregar el cliente:", error);
            return false;
        }
    }

    // Modificar un cliente existente
    public async modificarCliente(atributosCliente: ClienteDatabaseAttributes): Promise<boolean> {
        try {
            const query = `UPDATE cliente SET nombre = $1, apellido = $2, edad = $3, direccion = $4, tipoCliente = $5
                            WHERE id = $6`;
            const values = [
                atributosCliente.nombre, atributosCliente.apellido, atributosCliente.edad,
                atributosCliente.direccion, atributosCliente.tipoCliente, atributosCliente.id
            ];
            await this.dbController.query(query, values);
            return true;
        } catch (error) {
            console.error("Error al modificar el cliente:", error);
            return false;
        }
    }

    // Eliminar un cliente
    public async eliminarCliente(id: string): Promise<boolean> {
        try {
            const query = `DELETE FROM cliente WHERE id = $1`;
            await this.dbController.query(query, [id]);
            return true;
        } catch (error) {
            console.error("Error al eliminar el cliente:", error);
            return false;
        }
    }

    // Buscar un cliente por ID
    public async buscarCliente(id: string): Promise<ClienteDatabaseAttributes> {
        try {
            const query = `SELECT * FROM cliente WHERE id = $1`;
            const results = await this.dbController.query<ClienteDatabaseAttributes>(query, [id]);
            if (results.length === 0) {
                console.log(`No se encontró el cliente con el número ${id}`);
            }
    
            return results[0]!;
        } catch (error) {
            console.error("Error al buscar el cliente:", error);
            throw error;
        }
    }

    // Obtener todos los clientes
    public async obtenerTodosLosClientes(): Promise<ClienteDatabaseAttributes[]> {
        try {
            const query = `SELECT * FROM cliente`;
            const results = await this.dbController.query<ClienteDatabaseAttributes>(query, []);
            return results;
        } catch (error) {
            console.error("Error al obtener todos los clientes:", error);
            throw error;
        }
    }
}
