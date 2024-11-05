import Cita from "../../dominio/model/cita/Cita"
import Cliente from "../../dominio/model/cliente/Cliente"
import NullTurno from "../../dominio/model/turno/NullTurno"
import Turno, { TurnoInterfaceAtributtes } from "../../dominio/model/turno/Turno"
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort"
import AgenteUseCasePort from "../../dominio/port/driver/useCaseDriver/AgenteUseCasePort"
import CitaUseCasePort from "../../dominio/port/driver/useCaseDriver/CitaUseCasePort"
import ClienteUseCasePort from "../../dominio/port/driver/useCaseDriver/ClienteUseCasePort"
import ColaCitaUseCasePort from "../../dominio/port/driver/useCaseDriver/ColaCitaUseCasePort"

export default class ColaCitasUseCase implements ColaCitaUseCasePort{

    constructor(
        private readonly colaCitaService: ColaCitaServicePort,
        private readonly clienteUseCase: ClienteUseCasePort,
        private readonly citaUseCase: CitaUseCasePort,

    ) {}

    public listaTurnos = async (): Promise<Turno[]> => {
        try {
            const citasData = await this.colaCitaService.listaCitas();
            return citasData;
        } catch (error) {
            console.error('Error en listaTurnos:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    }

    public modificarCola = async (lista: Turno[]): Promise<boolean> => {
        try {
            const resultado = await this.colaCitaService.modificarCola(lista);
            return resultado;
        } catch (error) {
            console.error('Error en modificarCola:', error);
            return false;
        }
    }

    public agregarTurno = async (cita: Cita): Promise<Turno> => {
        try {
            // Obtiene el cliente de la cita
            const cliente = await this.clienteUseCase.obtenerClientePorCita(cita.getNumeroCita());
            const esClientePremium = await this.verificarPrioridad(cliente);


            const listaTurnos= await this.listaTurnos();

            const turno: TurnoInterfaceAtributtes ={
                idTurno: listaTurnos.length+1,
                turno: `T-${this.generarPuesto()}` , 
                puesto: this.generarPuesto(),
                idCita: cita.getNumeroCita() 
            }
            // Crea el nuevo turno basado en la cita
            const nuevoTurno = new Turno(turno);

            // Si el cliente es premium, agrega el turno al inicio de la cola
            if (esClientePremium) {
                listaTurnos.unshift(nuevoTurno);
            } else {
                listaTurnos.push(nuevoTurno);
            }

            return nuevoTurno
        } catch (error) {
            console.error('Error en agregarTurno:', error);
            return new NullTurno();
        }
    };

    public verificarPrioridad = async (cliente: Cliente): Promise<boolean> => {
        try {
            // Verifica si el cliente es premium
            const prioridad = await this.clienteUseCase.verificarTipoClientePremium(cliente); 
            return prioridad;
        } catch (error) {
            console.error('Error en verificarPrioridad:', error);
            return false;
        }
    };

    public obtenerTurno = async (numeroCita: string): Promise<Turno> => {
        try {
            const cita = await this.citaUseCase.buscarCita(numeroCita);
            if (!cita) return new NullTurno();

            const turno = await this.agregarTurno(cita)
            return turno || new NullTurno();
        } catch (error) {
            console.error('Error en obtenerTurno:', error);
            return new NullTurno();
        }
    };

    public generarPuesto(): number{
        return 1
    }



    public eliminarTurno = async (numeroCita: string): Promise<boolean> => {
        try {
            const resultado = await this.colaCitaService.eliminarTurno(numeroCita);
            return resultado;
        } catch (error) {
            console.error('Error en eliminarTurno:', error);
            return false;
        }
    }
}