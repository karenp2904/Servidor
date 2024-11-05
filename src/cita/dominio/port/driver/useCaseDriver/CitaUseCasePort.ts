import Cita from "../../../model/cita/Cita";
import Cliente from "../../../model/cliente/Cliente";

export default interface CitaUseCasePort{
    
    agendarCita: (cita: Cita)=>Promise<boolean>;
    modificarCita: (cita: Cita)=> Promise<boolean>;
    eliminarCita: (numeroCita: string)=> Promise<boolean>;
    buscarCita: (numeroCita: string)=>  Promise<Cita>;
    buscarCitasPorCliente:(cliente:Cliente)=> Promise<Cita[]>;

}