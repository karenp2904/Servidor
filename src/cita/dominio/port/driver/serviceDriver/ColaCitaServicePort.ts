import Turno from "../../../model/turno/Turno";

export default interface ColaCitaServicePort{
    listaCitas:  ()=> Promise<Turno[]>;
    modificarCola: (lista:Turno[])=> Promise<boolean>;
    eliminarTurno: (numero:string)=> Promise<boolean>;

}