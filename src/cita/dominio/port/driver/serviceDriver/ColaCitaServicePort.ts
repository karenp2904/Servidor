import Cita from "../../../model/cita/Cita";

export default interface ColaCitaServicePort{
    listaCitas:  ()=> Promise<Cita[]>;
    modificarCola: (lista:Cita[])=> Promise<boolean>;
    

}