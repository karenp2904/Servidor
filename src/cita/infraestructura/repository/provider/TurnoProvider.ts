import Turno from "../../../dominio/model/turno/Turno";
import TurnoDatabaseAttributes from "../../../dominio/types/TurnoDatabaseAttributes";


export default class TurnoProvider {
    public static toDatabaseAttributes(turno: Turno): TurnoDatabaseAttributes {
        return {
            idturno: turno.getIdTurno(),
            turno: turno.getTurno(),
            puesto: turno.getPuesto(),
            idcita: turno.getIdCita(),
        };
    }

    public static fromDatabaseAttributes(attributes: TurnoDatabaseAttributes): Turno {
        return new Turno({
            idTurno: attributes.idturno,
            turno: attributes.turno,
            puesto: attributes.puesto,
            idCita: attributes.idcita,
        });
    }
}
