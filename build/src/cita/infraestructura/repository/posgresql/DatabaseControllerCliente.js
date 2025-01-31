"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseControllerClientes {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    async agregarCliente(atributosCliente) {
        try {
            // Si el cliente no existe, lo agregamos
            const query = `INSERT INTO cliente (id, nombre, apellido, edad, direccion, tipoCliente)
                            VALUES ($1, $2, $3, $4, $5, $6)`;
            const values = [
                atributosCliente.id, atributosCliente.nombre, atributosCliente.apellido,
                atributosCliente.edad, atributosCliente.direccion, atributosCliente.tipoCliente
            ];
            await this.dbController.query(query, values);
            console.log("Cliente agregado exitosamente.");
            return true;
        }
        catch (error) {
            console.error("Error al agregar el cliente:", error);
            return false;
        }
    }
    // Modificar un cliente existente
    async modificarCliente(atributosCliente) {
        try {
            const query = `UPDATE cliente SET nombre = $1, apellido = $2, edad = $3, direccion = $4, tipoCliente = $5
                            WHERE id = $6`;
            const values = [
                atributosCliente.nombre, atributosCliente.apellido, atributosCliente.edad,
                atributosCliente.direccion, atributosCliente.tipoCliente, atributosCliente.id
            ];
            await this.dbController.query(query, values);
            return true;
        }
        catch (error) {
            console.error("Error al modificar el cliente:", error);
            return false;
        }
    }
    // Eliminar un cliente
    async eliminarCliente(id) {
        try {
            const query = `DELETE FROM cliente WHERE id = $1`;
            await this.dbController.query(query, [id]);
            return true;
        }
        catch (error) {
            console.error("Error al eliminar el cliente:", error);
            return false;
        }
    }
    // Buscar un cliente por ID
    async buscarCliente(id) {
        try {
            const query = `SELECT * FROM cliente WHERE id = $1`;
            const results = await this.dbController.query(query, [id]);
            if (results.rows.length == 0) {
                console.log(`No se encontró el cliente con el número ${id}`);
            }
            return results.rows[0];
        }
        catch (error) {
            console.error("Error al buscar el cliente:", error);
            return null;
        }
    }
    // Obtener todos los clientes
    async obtenerTodosLosClientes() {
        try {
            const query = `SELECT * FROM cliente`;
            const results = await this.dbController.query(query, []);
            return results.rows;
        }
        catch (error) {
            console.error("Error al obtener todos los clientes:", error);
            return [];
        }
    }
    async obtenerClientePorCita(numeroCita) {
        try {
            const query = `SELECT * FROM cliente WHERE id = (SELECT cliente FROM cita WHERE numerocita = $1)`;
            const results = await this.dbController.query(query, [numeroCita]);
            if (results.rowCount === 0) {
                console.log(`No se encontró el cliente para la cita con número ${numeroCita}`);
                return null; // Retorna null si no se encuentra el cliente
            }
            return results.rows[0];
            ; // Retorna el primer cliente encontrado
        }
        catch (error) {
            console.error("Error al obtener el cliente por número de cita:", error);
            return null; // Retorna null en caso de error
        }
    }
    ;
    async obtenerClientePorId(idCliente) {
        try {
            const query = `SELECT * FROM cliente WHERE idCliente = $1`;
            const results = await this.dbController.query(query, [idCliente]);
            if (results.rowCount === 0) {
                console.log(`No se encontró el cliente con ID ${idCliente}`);
                return null; // Retorna null si no se encuentra el cliente
            }
            return results.rows[0]; // Asegúrate de que sea del tipo correcto
        }
        catch (error) {
            console.error("Error al obtener el cliente por ID:", error);
            return null; // Retorna null en caso de error
        }
    }
    ;
}
exports.default = DatabaseControllerClientes;
