import Cliente from "../../../model/cliente/Cliente";

export default interface ClienteServicePort{


    agregarCliente:(cliente:Cliente)=>Promise<boolean>;
    obtenerCliente:(idCliente:string)=>Promise<Cliente>;
    modificarInformacionCliente:(cliente:Cliente)=>Promise<boolean>;
    obtenerClientePorCita:(numerCita:string)=> Promise<Cliente>;


}