import Cita from "../../dominio/model/cita/Cita"
import Cliente from "../../dominio/model/cliente/Cliente"
import NullTurno from "../../dominio/model/turno/NullTurno"
import Turno, { TurnoInterfaceAtributtes } from "../../dominio/model/turno/Turno"
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort"
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
                // Reasignar los puestos según el nuevo orden en la lista
                lista.forEach((turno, index) => {
                turno.setPuesto(index + 1) // Asigna la posición empezando desde 1
            });

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

            const listaTurnos = await this.listaTurnos();

            // Crear el nuevo turno
            const turno: TurnoInterfaceAtributtes = {
                idTurno: listaTurnos.length + 1,
                turno: `${await this.generarTurno(esClientePremium)}`,
                puesto: 0, // Se asignará después de ordenar
                idCita: cita.getNumeroCita()
            };

            const nuevoTurno = new Turno(turno);

            // Insertar en la posición adecuada según prioridad
            if (esClientePremium) {
                // Insertar al inicio de los turnos premium
                const indiceNoPremium = listaTurnos.findIndex(t => t.getTurno().startsWith('P'));
                if (indiceNoPremium !== -1) {
                    listaTurnos.splice(indiceNoPremium, 0, nuevoTurno); // Insertar antes del primer no-premium
                } else {
                    listaTurnos.push(nuevoTurno); // Si todos son premium, agregar al final
                }
            } else {
                // Agregar al final de la cola
                listaTurnos.push(nuevoTurno);
            }

            console.log(listaTurnos)

            // Reasignar puestos después de la inserción
            listaTurnos.forEach((t, index) => t.setPuesto(index + 1));

            // Guardar la lista modificada
            await this.modificarCola(listaTurnos);

            return nuevoTurno;
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
            return turno;
        } catch (error) {
            console.error('Error en obtenerTurno:', error);
            return new NullTurno();
        }
    };

    public generarTurno = async (esClientePremium: boolean): Promise<string> => {
        const listaTurnos = await this.listaTurnos();
    
        // Separar los turnos premium y no premium
        const turnosPremium = listaTurnos.filter(turno => turno.getTurno().startsWith('P'));
        const turnosNoPremium = listaTurnos.filter(turno => turno.getTurno().startsWith('G'));
    
        let nuevoTurno: string;
    
        if (esClientePremium) {
            // Para clientes premium, el turno tendrá el prefijo 'P' seguido de un número incrementado
            const siguienteNumero = turnosPremium.length + 1;
            nuevoTurno = `P-${siguienteNumero}`;
        } else {
            // Para clientes normales, el turno tendrá el prefijo 'G' seguido de un número incrementado
            const siguienteNumero = turnosNoPremium.length + 1;
            nuevoTurno = `G-${siguienteNumero}`;
        }
    
        return nuevoTurno;
    };
    


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