"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryCliente {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    findAll = async () => {
        try {
            const clientes = await this.dbController.obtenerTodosLosClientes();
            return clientes;
        }
        catch (error) {
            console.error("Error al obtener todos los clientes:", error);
            return [];
        }
    };
    findById = async (id) => {
        try {
            const cliente = await this.dbController.buscarCliente(id);
            if (cliente) {
                return cliente;
            }
            else {
                console.log(`No se encontró un cliente con el ID: ${id}`);
                return this.returnNullInterface();
            }
        }
        catch (error) {
            console.error("Error al buscar el cliente:", error);
            return this.returnNullInterface();
        }
    };
    findByCita = async (id) => {
        try {
            const cliente = await this.dbController.obtenerClientePorCita(id);
            if (cliente) {
                return cliente;
            }
            else {
                console.log(`No se encontró un cliente con el # cita: ${id}`);
                return this.returnNullInterface();
            }
        }
        catch (error) {
            console.error("Error al buscar el cliente:", error);
            return this.returnNullInterface();
        }
    };
    save = async (item) => {
        try {
            const success = await this.dbController.agregarCliente(item);
            if (success) {
                return item;
            }
            else {
                console.log("No se pudo guardar el cliente");
                return this.returnNullInterface();
            }
        }
        catch (error) {
            console.error("Error al guardar el cliente:", error);
            return this.returnNullInterface();
        }
    };
    update = async (id, item) => {
        try {
            // Cliente existente
            const existingCliente = await this.findById(id);
            if (!existingCliente) {
                throw new Error("Cliente no encontrado");
            }
            const updatedCliente = { ...existingCliente, ...item };
            return await this.dbController.modificarCliente(updatedCliente);
        }
        catch (error) {
            console.error("Error al actualizar el cliente:", error);
            return false;
        }
    };
    delete = async (id) => {
        try {
            return await this.dbController.eliminarCliente(id);
        }
        catch (error) {
            console.error("Error al eliminar el cliente:", error);
            return false;
        }
    };
    returnNullInterface() {
        return {
            id: '', // Asegúrate de que estos campos correspondan con tu interfaz
            nombre: '',
            apellido: '',
            edad: 0,
            direccion: '',
            tipocliente: '',
        };
    }
}
exports.default = RepositoryCliente;
