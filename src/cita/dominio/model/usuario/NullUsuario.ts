import Usuario, { UsuarioInterfaceAtributtes } from "./Usuario";

export default class NullUsuario extends Usuario {
    constructor() {
        super({
        idUsuario: -1, 
        usuario: 'Desconocido',
        contraseña: '', 
        rol: 'agente' // rol por defecto
        });
    }

    public override isNull = (): boolean => {
        return true;
    };

    public override setIdUsuario = (_value: number): void => {};
    public override setUsuario = (_value: string): void => {};
    public override setContraseña = (_value: string): void => {};
    public override setRol = (_value: 'agente' | 'admin'): void => {};
}
