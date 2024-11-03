import Cliente from "./Cliente";

export default class NullCliente extends Cliente {
    constructor() {
        super({
        id: '0000',
        nombre: 'No Disponible',
        apellido: 'No Disponible',
        edad: 0,
        direccion: 'No Disponible',
        tipoCliente: 'No Disponible'
        });
    }

    public override isNull = (): boolean => {
        return true;
    };

    public override setId = (_value: string): void => {};
    public override setNombre = (_value: string): void => {};
    public override setApellido = (_value: string): void => {};
    public override setEdad = (_value: number): void => {};
    public override setDireccion = (_value: string): void => {};
    public override setTipoCliente = (_value: string): void => {};
}
