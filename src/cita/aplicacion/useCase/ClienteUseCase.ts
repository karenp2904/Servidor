import Cliente from "../../dominio/model/cliente/Cliente";
import NullCliente from "../../dominio/model/cliente/NullCliente";
import ClienteUseCasePort from "../../dominio/port/driver/useCaseDriver/ClienteUseCasePort";

export default class ClienteUseCase implements ClienteUseCasePort{

    public obtenerClientePorCita= (numerCita: string) : Cliente=>{
        return new NullCliente()
    }

    public verificarTipoClientePremium = (cliente: Cliente) :boolean =>{
        return true;
    }

    public verificarEdadPremiun = (edad: number) :boolean=>{
        return true;
    }

    public agregarCliente = (cliente: Cliente) :boolean =>{
        return true;
    }

    public modificarInformacionCliente = (cliente: Cliente) :boolean =>{
        return true;
    }
    
}