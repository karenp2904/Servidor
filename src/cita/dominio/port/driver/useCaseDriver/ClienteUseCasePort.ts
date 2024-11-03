import Cliente from "../../../model/cliente/Cliente";

export default interface ClienteUseCasePort{

    verificarTipoClientePremium: (cliente:Cliente)=>boolean;
    verificarEdadPremiun: (edad:number)=>boolean;

    agregarCliente:(cliente:Cliente)=>boolean;
    modificarInformacionCliente:(cliente:Cliente)=>boolean;

    obtenerClientePorCita:(numerCita:string)=>Cliente;


}