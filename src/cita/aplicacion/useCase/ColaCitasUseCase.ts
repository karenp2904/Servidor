import Cita from "../../dominio/model/cita/Cita"
import Cliente from "../../dominio/model/cliente/Cliente"
import Turno from "../../dominio/model/turno/Turno"
import ColaCitaUseCasePort from "../../dominio/port/driver/useCaseDriver/ColaCitaUseCasePort"

export default class ColaCitasUseCase implements ColaCitaUseCasePort{

    
    public listaCitas=(): Cita[]=>{
        // const citasData= this.citaService.listaCitas()
        return []
    }

    public modificarCola=(lista: Cita[]) : boolean=>{
        // const citasData= this.citaService.listaCitas()
        return true
    }

    public agregarTurno=(cita: Cita): boolean=>{
        // const citasData= this.citaService.listaCitas()
        return true
    }
    public verificarPrioridad=(cliente: Cliente): boolean=>{
        // const citasData= this.citaService.listaCitas()
        return true
    }

    public obtenerTurno=(numeroCita: string) : Turno=>{
        // const citasData= this.citaService.listaCitas()
        return []
    }

    public eliminarTurno=(cita: Cita) : boolean=>{
        // const citasData= this.citaService.listaCitas()
        return true

    }
}