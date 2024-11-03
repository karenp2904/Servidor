import Cita from "./Cita";
import Cliente from "../cliente/Cliente";
import NullCliente from "../cliente/NullCliente";

export default class NullCita extends Cita {
    constructor() {
        super({
        numeroCita: '0000',
        fecha: '0000-00-00',
        hora: '00:00',
        lugar: 'No Disponible',
        descripcion: 'No Disponible',
        asistencia: 'No Disponible',
        tipoCita: 'No Disponible',
        anotaciones: 'No Disponible',
        cliente: new NullCliente(),
        });
    }

    public override isNull = (): boolean => {
        return true;
    };

    public override setNumeroCita = (_value: string): void => {};
    public override setFecha = (_value: string): void => {};
    public override setHora = (_value: string): void => {};
    public override setLugar = (_value: string): void => {};
    public override setDescripcion = (_value: string): void => {};
    public override setAsistencia = (_value: string): void => {};
    public override setTipoCita = (_value: string): void => {};
    public override setAnotaciones = (_value: string): void => {};
    public override setCliente = (_value: Cliente): void => {};
}
