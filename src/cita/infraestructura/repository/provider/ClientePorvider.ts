import Cliente from "../../../dominio/model/cliente/Cliente";
import NullCliente from "../../../dominio/model/cliente/NullCliente";
import DatabaseConexion from "../posgresql/DatabaseConexion";
import DatabaseControllerClientes from "../posgresql/DatabaseControllerCliente";
import RepositoryCliente from "../repo/RepositoryCliente";

export default class ClienteProvider {
    public static get = async (idCliente: string): Promise<Cliente | NullCliente> => {
        const repoCliente = new RepositoryCliente(new DatabaseControllerClientes(new DatabaseConexion()));

        const clienteData = await repoCliente.findById(idCliente); 
        
        if (!clienteData) {
            return new NullCliente();
        }

        return new Cliente({
            id: clienteData.id,
            nombre: clienteData.nombre,
            apellido: clienteData.apellido,
            edad: clienteData.edad,
            direccion: clienteData.direccion,
            tipoCliente: clienteData.tipoCliente || ''
        });
    }


}