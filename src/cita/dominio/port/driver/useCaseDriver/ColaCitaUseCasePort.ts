import Cita from "../../../model/cita/Cita";
import Cliente from "../../../model/cliente/Cliente";
import Turno from "../../../model/turno/Turno";

export default interface ColaCitaUseCasePort{

    listaTurnos:  ()=>Promise<Turno[]>;
    agregarTurno: (cita:Cita)=> Promise<Turno>;
    verificarPrioridad: (cliente:Cliente)=> Promise<boolean>; //true si es premium
    obtenerTurno:(numeroCita:string)=> Promise<Turno>;
    obtenerTurnoId: (idTurno:string)=> Promise<Turno>;



    
}

//pd: VERIFICAR EL TURNO EN EL FRONT