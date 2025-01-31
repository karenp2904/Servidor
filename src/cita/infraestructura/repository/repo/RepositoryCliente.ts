import ClienteRepositoryPort from "../../../dominio/port/driven/ClienteRepositoryPort";
import ClienteDatabaseAttributes from "../../../dominio/types/ClienteDatabaseAttributes";
import DatabaseControllerClientes from "../posgresql/DatabaseControllerCliente";


export default class RepositoryCliente implements ClienteRepositoryPort {
    private dbController: DatabaseControllerClientes;

    constructor(dbController: DatabaseControllerClientes) {
        this.dbController = dbController;
    }

    findAll = async (): Promise<ClienteDatabaseAttributes[]> => {
        try {
            const clientes = await this.dbController.obtenerTodosLosClientes();
            return clientes;
        } catch (error) {
            console.error("Error al obtener todos los clientes:", error);
            return[]
        }
    };

    findById = async (id: string): Promise<ClienteDatabaseAttributes> => {
        try {
            const cliente = await this.dbController.buscarCliente(id);
            if (cliente) {
                return cliente;
            } else {
                console.log(`No se encontró un cliente con el ID: ${id}`);
                return this.returnNullInterface(); 
            }
        } catch (error) {
            console.error("Error al buscar el cliente:", error);
            return this.returnNullInterface(); 
        }
    };

    findByCita = async (id: string): Promise<ClienteDatabaseAttributes> => {
        try {
            const cliente = await this.dbController.obtenerClientePorCita(id)
            if (cliente) {
                return cliente;
            } else {
                console.log(`No se encontró un cliente con el # cita: ${id}`);
                return this.returnNullInterface(); 
            }
        } catch (error) {
            console.error("Error al buscar el cliente:", error);
            return this.returnNullInterface(); 
        }
    };

    save = async (item: ClienteDatabaseAttributes): Promise<ClienteDatabaseAttributes> => {
        try {
            const success = await this.dbController.agregarCliente(item);
            if (success) {
                return item;
            } else {
                console.log("No se pudo guardar el cliente");
                return this.returnNullInterface(); 
            }
        } catch (error) {
            console.error("Error al guardar el cliente:", error);
            return this.returnNullInterface(); 
        }
    };

    update = async (id: string, item: Partial<ClienteDatabaseAttributes>): Promise<boolean> => {
        try {
            // Cliente existente
            const existingCliente = await this.findById(id);
            if (!existingCliente) {
                throw new Error("Cliente no encontrado");
            }

            const updatedCliente = { ...existingCliente, ...item };

            return await this.dbController.modificarCliente(updatedCliente);
        } catch (error) {
            console.error("Error al actualizar el cliente:", error);
            return false;
        }
    };

    delete = async (id: string): Promise<boolean> => {
        try {
            return await this.dbController.eliminarCliente(id);
        } catch (error) {
            console.error("Error al eliminar el cliente:", error);
            return false;
        }
    };

    returnNullInterface(): ClienteDatabaseAttributes {
        return {
            id: '',              // Asegúrate de que estos campos correspondan con tu interfaz
            nombre: '',
            apellido: '',
            edad: 0,
            direccion: '',
            tipocliente: '',
        } as ClienteDatabaseAttributes; 
    }
}
