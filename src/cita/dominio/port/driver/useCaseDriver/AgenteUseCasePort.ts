import Cita from "../../../model/cita/Cita";
import Turno from "../../../model/turno/Turno";

export default interface AgenteUseCasePort{
    
    obtenerCola:()=>Promise<Turno[]>;
    modificarCola: (lista:Turno[])=>  Promise<boolean>;
    completarCita: (cita:Cita)=>  Promise<boolean>; //lLena campos de asistencia y anotaciones
    eliminarTurno:(numerCita:string)=> Promise<boolean>; // cuando la cita finaliza

}