export default class Usuario {
    private idUsuario: number;
    private usuario: string;
    private contraseña: string;
    private rol: 'agente' | 'admin';

    constructor(usuarioAttributes: UsuarioInterfaceAtributtes) {
        this.idUsuario = usuarioAttributes.idUsuario;
        this.usuario = usuarioAttributes.usuario;
        this.contraseña = usuarioAttributes.contraseña;
        this.rol = usuarioAttributes.rol;
    }

    public  isNull = (): boolean => {
        return false
    }
    
    // Método para obtener información básica del usuario sin contraseña
    public getUsuarioInfo(): string {
        return `ID: ${this.idUsuario}, Usuario: ${this.usuario}, Rol: ${this.rol}`;
    }

    // Método para verificar el rol del usuario
    public esAdmin(): boolean {
        return this.rol === 'admin';
    }

    public getIdUsuario(): number {
        return this.idUsuario;
    }
    public setIdUsuario(value: number): void {
        this.idUsuario = value;
    }

    public getUsuario(): string {
        return this.usuario;
    }
    public setUsuario(value: string): void {
        this.usuario = value;
    }

    public getContraseña(): string {
        return this.contraseña;
    }
    public setContraseña(value: string): void {
        this.contraseña = value;
    }

    public getRol(): 'agente' | 'admin' {
        return this.rol;
    }
    public setRol(value: 'agente' | 'admin'): void {
        this.rol = value;
    }
    
}

export interface UsuarioInterfaceAtributtes{
    idUsuario:number,
    usuario:string,
    contraseña:string,
    rol: 'agente' | 'admin'
}