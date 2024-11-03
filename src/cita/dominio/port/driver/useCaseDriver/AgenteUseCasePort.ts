import Cita from "../../../model/cita/Cita";

export default interface AgenteUseCasePort{
    
    obtenerColaCitas:()=>Cita[];
    modificarCola: (lista:Cita[])=> boolean;
    completarCita: (cita:Cita)=> boolean; //lLena campos de asistencia y anotaciones
    finalizarCita:(cita:Cita)=>boolean; //eliminarla de la cola

    
    
}