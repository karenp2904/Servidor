import Cliente from "../cliente/Cliente";

export default class Cita {
    private numeroCita: string;
    private fecha: string;
    private hora: string;
    private lugar: string;
    private descripcion: string;
    private asistencia: string;
    private tipoCita: string;
    private anotaciones: string;
    private cliente: Cliente;

    constructor(cita: CitaInterfaceAtrubuttes) {
        this.numeroCita = cita.numeroCita;
        this.fecha = cita.fecha;
        this.hora = cita.hora;
        this.lugar = cita.lugar;
        this.descripcion = cita.descripcion;
        this.asistencia = cita.asistencia;
        this.tipoCita = cita.tipoCita;
        this.anotaciones = cita.anotaciones;
        this.cliente = cita.cliente;
    }

    public  isNull = (): boolean => {
        return false
    }

    public getCitaInfo(): string {
        return `Cita #${this.numeroCita} - ${this.fecha} ${this.hora}, Lugar: ${this.lugar}`;
    }

    public getClienteInfo(): string {
        return `Cliente: ${this.cliente.getFullName()}`;
    }
    public getNumeroCita(): string {
        return this.numeroCita;
    }
    public setNumeroCita(value: string): void {
        this.numeroCita = value;
    }

    public getFecha(): string {
        return this.fecha;
    }
    public setFecha(value: string): void {
        this.fecha = value;
    }

    public getHora(): string {
        return this.hora;
    }
    public setHora(value: string): void {
        this.hora = value;
    }

    public getLugar(): string {
        return this.lugar;
    }
    public setLugar(value: string): void {
        this.lugar = value;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }
    public setDescripcion(value: string): void {
        this.descripcion = value;
    }

    public getAsistencia(): string {
        return this.asistencia;
    }
    public setAsistencia(value: string): void {
        this.asistencia = value;
    }

    public getTipoCita(): string {
        return this.tipoCita;
    }
    public setTipoCita(value: string): void {
        this.tipoCita = value;
    }

    public getAnotaciones(): string {
        return this.anotaciones;
    }
    public setAnotaciones(value: string): void {
        this.anotaciones = value;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }
    public setCliente(value: Cliente): void {
        this.cliente = value;
    }

   
    
}

export interface CitaInterfaceAtrubuttes{
    numeroCita: string,
    fecha:string,
    hora:string,
    lugar:string,
    descripcion:string,
    asistencia:string,
    tipoCita:string,
    anotaciones:string,
    cliente:Cliente,

}