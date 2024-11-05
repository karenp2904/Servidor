import Turno from "../../dominio/model/turno/Turno";
import TurnoRepositoryPort from "../../dominio/port/driven/TurnoRepositoryPort";
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort";

export default class TurnoService implements ColaCitaServicePort{

    constructor(private readonly turnoRepository: TurnoRepositoryPort) {}

    eliminarTurno: (numero: string) => Promise<boolean>;
    agregarTurno: (turno: Turno) => Promise<boolean>;

    listaCitas= () : Promise<Turno[]> =>{

    }
    modificarCola=(lista: Turno[]) : Promise<boolean>=>{

    }

}