import Turno from "../../dominio/model/turno/Turno";
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort";

export default class TurnoService implements ColaCitaServicePort{

    listaCitas= () : Promise<Turno[]> =>{

    }
    modificarCola=(lista: Turno[]) : Promise<boolean>=>{

    }

}