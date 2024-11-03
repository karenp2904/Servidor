import Cita from "../../../model/cita/Cita";
import Cliente from "../../../model/cliente/Cliente";

export default interface CitaUseCasePort{
    
    agendarCita: (cita: Cita)=>boolean;
    modificarCita: (cita: Cita)=> boolean;
    eliminarCita: (numeroCita: string)=> boolean;
    buscarCita: (numeroCita: string)=>  Promise<Cita>;
    buscarCitasPorCliente:(cliente:Cliente)=> Promise<Cita[]>;

}