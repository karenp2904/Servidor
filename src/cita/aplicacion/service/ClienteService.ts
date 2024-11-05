import Cliente from "../../dominio/model/cliente/Cliente";
import ClienteServicePort from "../../dominio/port/driver/serviceDriver/ClienteServicePort";

export default class ClienteService implements ClienteServicePort{


    agregarCliente= (cliente: Cliente): Promise<boolean> =>{

    }
    obtenerCliente=(idCliente: string)  :Promise<Cliente> =>{

    }
    modificarInformacionCliente= (cliente: Cliente) :Promise<boolean> =>{

    }

    obtenerClientePorCita= (numerCita: string) :Promise<Cliente>=>{

    }

}