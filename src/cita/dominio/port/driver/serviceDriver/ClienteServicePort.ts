import Cliente from "../../../model/cliente/Cliente";

export default interface ClienteUseCasePort{


    agregarCliente:(cliente:Cliente)=>Promise<boolean>;
    obtenerCliente:(idCliente:string)=>Promise<Cliente>;
    modificarInformacionCliente:(cliente:Cliente)=>Promise<boolean>;


}