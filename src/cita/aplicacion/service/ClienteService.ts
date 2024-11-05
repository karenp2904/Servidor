import Cliente from "../../dominio/model/cliente/Cliente";
import NullCliente from "../../dominio/model/cliente/NullCliente";
import ClienteRepositoryPort from "../../dominio/port/driven/ClienteRepositoryPort";
import ClienteServicePort from "../../dominio/port/driver/serviceDriver/ClienteServicePort";
import ClienteDatabaseAtributtes from "../../dominio/types/ClienteDatabaseAttributes";
import ClienteProvider from "../../infraestructura/repository/provider/ClientePorvider";

export default class ClienteService implements ClienteServicePort{


    constructor(private readonly clienteRepository: ClienteRepositoryPort) {}

    // Adds a new cliente to the repository
    public agregarCliente = async (cliente: Cliente): Promise<boolean> => {
        try {
            const clienteData: ClienteDatabaseAtributtes = {
                id: cliente.getId(),
                nombre: cliente.getNombre(),
                apellido: cliente.getApellido(),
                edad: cliente.getEdad(),
                direccion: cliente.getDireccion(),
                tipoCliente: cliente.getTipoCliente()
            };

            await this.clienteRepository.save(clienteData);
            console.log("Cliente agregado exitosamente");
            return true;
        } catch (error) {
            console.error("Error al agregar el cliente:", error);
            return false;
        }
    };

    // Fetches a cliente by its ID from the repository
    public obtenerCliente = async (idCliente: string): Promise<Cliente> => {
        try {
            const cliente = await this.clienteRepository.findById(idCliente);
            if(cliente){
                const clienteType= ClienteProvider.get(cliente.id)
                if(clienteType){
                    return clienteType;
                }else{ return new NullCliente}
            }else{ return new NullCliente}

        } catch (error) {
            console.error("Error al obtener el cliente:", error);
            throw error;
        }
    };

    // Updates client information
    public modificarInformacionCliente = async (cliente: Cliente): Promise<boolean> => {
        try {
            const clienteData: ClienteDatabaseAtributtes = {
                id: cliente.getId(),
                nombre: cliente.getNombre(),
                apellido: cliente.getApellido(),
                edad: cliente.getEdad(),
                direccion: cliente.getDireccion(),
                tipoCliente: cliente.getTipoCliente()
            };

            const result=await this.clienteRepository.update(clienteData.id, clienteData);
            console.log("Información del cliente actualizada exitosamente");
            return result !== null;
        } catch (error) {
            console.error("Error al modificar la información del cliente:", error);
            return false;
        }
    };

    public obtenerClientePorCita = async (numeroCita: string): Promise<Cliente> => {
        try {
            const cliente = await this.clienteRepository.findByCita(numeroCita);
            if(cliente){
                const clienteType= ClienteProvider.get(cliente.id)
                if(clienteType){
                    return clienteType;
                }else{ return new NullCliente}
            }else{ return new NullCliente}
            
        } catch (error) {
            console.error("Error al obtener el cliente por cita:", error);
            throw error;
        }
    };

}