import Turno from "./Turno";

export default class NullTurno extends Turno {
    constructor() {
        super({
        idTurno: -1, // Valor que indica un ID no válido
        turno: 'No Disponible',
        puesto: -1,
        idCita:'No hay'

        });
    }

    public override isNull = (): boolean => {
        return true;
    };

    public override setIdTurno = (_value: number): void => {};
    public override setTurno = (_value: string): void => {};
    public override setPuesto = (_value: number): void => {};
}
