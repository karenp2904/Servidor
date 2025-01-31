import Turno from "../../../model/turno/Turno";

export default interface ColaCitaServicePort{
    listaTurnos:  ()=> Promise<Turno[]>;
    modificarCola: (lista:Turno[])=> Promise<boolean>;
    eliminarTurno: (numero:string)=> Promise<boolean>;
    obtenerTurnoId: (idTurno:string)=> Promise<Turno>;
    agregarTurno:(turno:Turno)=> Promise<boolean>;
}