import Cita from "../../../model/cita/Cita";
import Cliente from "../../../model/cliente/Cliente";
import Turno from "../../../model/turno/Turno";

export default interface ColaCitaUseCasePort{

    listaTurnos:  ()=> Turno[];
    modificarCola: (lista:Cita[])=> boolean;
    agregarTurno: (cita:Cita)=>boolean;
    verificarPrioridad: (cliente:Cliente)=>boolean; //true si es premium
    obtenerTurno:(numeroCita:string)=>Turno;
    eliminarTurno:(cita:Cita)=>boolean; // cuando la cita finaliza



    
}

//pd: VERIFICAR EL TURNO EN EL FRONT