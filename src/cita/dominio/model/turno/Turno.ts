
export default class Turno{
    private idTurno: number;
    private turno: string;
    private puesto:number;
    private idCita: string;

    constructor(turnoAttributes: TurnoInterfaceAtributtes) {
        this.idTurno = turnoAttributes.idTurno;
        this.turno = turnoAttributes.turno;
        this.puesto = turnoAttributes.puesto;
        this.idCita = turnoAttributes.idCita;

    }
    
    public  isNull = (): boolean => {
        return false
    }

    // Método para obtener información completa del turno
    public getTurnoInfo(): string {
        return `ID Turno: ${this.idTurno}, Turno: ${this.turno}`;
    }

    public getIdTurno(): number {
        return this.idTurno;
    }
    public setIdTurno(value: number): void {
        this.idTurno = value;
    }

    public getTurno(): string {
        return this.turno;
    }
    public setTurno(value: string): void {
        this.turno = value;
    }

    public getPuesto(): number {
        return this.puesto;
    }
    public setPuesto(value: number): void {
        this.puesto = value;
    }


    public getIdCita(): string {
        return this.idCita;
    }
    public setIdCita(value: string): void {
        this.idCita = value;
    }



}
export interface TurnoInterfaceAtributtes{
    idTurno:number,
    turno:string,
    puesto:number;
    idCita: string;
}