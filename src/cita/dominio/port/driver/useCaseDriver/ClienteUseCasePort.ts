import Cliente from "../../../model/cliente/Cliente";

export default interface ClienteUseCasePort{

    verificarTipoClientePremium: (cliente:Cliente)=> Promise<boolean>;
    verificarEdadPremiun: (edad:number)=> Promise<boolean>;

    agregarCliente:(cliente:Cliente)=> Promise<boolean>;
    modificarInformacionCliente:(cliente:Cliente)=> Promise<boolean>;

    obtenerClientePorCita:(numerCita:string)=> Promise<Cliente>;


}