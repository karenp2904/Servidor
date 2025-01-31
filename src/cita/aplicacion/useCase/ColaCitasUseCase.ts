import Cita from "../../dominio/model/cita/Cita"
import Cliente from "../../dominio/model/cliente/Cliente"
import NullTurno from "../../dominio/model/turno/NullTurno"
import Turno, { TurnoInterfaceAtributtes } from "../../dominio/model/turno/Turno"
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort"
import CitaUseCasePort from "../../dominio/port/driver/useCaseDriver/CitaUseCasePort"
import ClienteUseCasePort from "../../dominio/port/driver/useCaseDriver/ClienteUseCasePort"
import ColaCitaUseCasePort from "../../dominio/port/driver/useCaseDriver/ColaCitaUseCasePort"
import ChangeProvider from "../../infraestructura/repository/provider/ChangeType"

export default class ColaCitasUseCase implements ColaCitaUseCasePort{


    constructor(
        private readonly colaCitaService: ColaCitaServicePort,
        private readonly clienteUseCase: ClienteUseCasePort,
        private readonly citaUseCase: CitaUseCasePort,

    ) {}

    public listaTurnos = async (): Promise<Turno[]> => {
        try {
            const citasData = await this.colaCitaService.listaTurnos();
            
            // Ordena los turnos por el campo 'puesto'
            const turnosOrdenados = citasData.sort((a, b) => a.getPuesto() - b.getPuesto());
            
            return turnosOrdenados;
        } catch (error) {
            console.error('Error en listaTurnos:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    };
    

    public modificarCola = async (lista: Turno[]): Promise<boolean> => {
        try {
    
            const nuevaLista= lista.map(item => ChangeProvider.getInterfaceTurno(item));
    
            console.log('Lista de turnos actualizada turno:', nuevaLista);

            // Reasignar los puestos según el nuevo orden en la lista
            nuevaLista.forEach((turno, index) => {
                turno.setPuesto(index + 1) // Asigna la posición empezando desde 1
            });
            console.log('Lista de turnos actualizada:', nuevaLista);

            const resultado = await this.colaCitaService.modificarCola(nuevaLista);
            return resultado;
        } catch (error) {
            console.error('Error en modificarCola:', error);
            return false;
        }
    }
    
    

    public agregarTurno = async (cita: Cita): Promise<Turno> => {
            try {
            // Obtiene el cliente de la cita
            const citaChange = ChangeProvider.getInterfaceCita(cita);
            
            // Verificar si el turno ya existe para el número de cita
            const listaTurnos = await this.listaTurnos() as Turno[];
            const turnoExistente = listaTurnos.find(t => t.getIdCita() === citaChange.getNumeroCita());

            // Si el turno ya existe, retornarlo
            if (turnoExistente) {
                console.log("El turno ya existe para esta cita:", turnoExistente);
                return turnoExistente;
            }

            const cliente = await this.clienteUseCase.obtenerClientePorCita(citaChange.getNumeroCita().toString());
            console.log(cliente)
            const esClientePremium = await this.verificarPrioridad(cliente);
            console.log(esClientePremium)

    

            // Crear el nuevo turno
            const turno: TurnoInterfaceAtributtes = {
                idTurno: listaTurnos.length + 5,
                turno: `${await this.generarTurno(esClientePremium)}`,
                puesto: 0, // Se asignará después de ordenar
                idCita: citaChange.getNumeroCita()
            };

            const nuevoTurno = new Turno(turno);
            const agregado= await this.colaCitaService.agregarTurno(nuevoTurno)
            console.log(agregado)


        if (esClientePremium) {
            // Insertar al inicio de los turnos premium
            const indiceNoPremium = listaTurnos.findIndex(t => !t.getTurno().startsWith('P'));
            if (indiceNoPremium !== -1) {
                listaTurnos.splice(indiceNoPremium, 0, nuevoTurno); // Insertar antes del primer no-premium
            } else {
                listaTurnos.push(nuevoTurno); // Si todos son premium, agregar al final
            }
        } else {
            listaTurnos.push(nuevoTurno); 
        }

        // Reasignar puestos después de la inserción
        listaTurnos.forEach((t, index) => t.setPuesto(index));


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
            const cita = await this.citaUseCase.buscarCita(numeroCita) as Cita;
            if (!cita) return new NullTurno();


            const turno = await this.agregarTurno(cita)

            
            return turno;
        } catch (error) {
            console.error('Error en obtenerTurno:', error);
            return new NullTurno();
        }
    };


    public obtenerTurnoId = async (idTurno: string): Promise<Turno> => {
        try {
            const turno = await this.colaCitaService.obtenerTurnoId(idTurno)
            if (!turno) return new NullTurno();

            return turno

        } catch (error) {
            console.error('Error en obtenerTurno:', error);
            return new NullTurno();
        }
    };

    public generarTurno = async (esClientePremium: boolean): Promise<string> => {
        const listaTurnos = await this.listaTurnos() as Turno[];
    
        // Separar los turnos premium y no premium
        const turnosPremium = listaTurnos.filter(turno => turno.getTurno().startsWith('P'));
        const turnosNoPremium = listaTurnos.filter(turno => turno.getTurno().startsWith('G'));
    
        console.log(turnosNoPremium, turnosPremium)
        let nuevoTurno: string;
        
        if (esClientePremium) {
            console.log(esClientePremium)
            // Para clientes premium, el turno tendrá el prefijo 'P' seguido de un número incrementado
            const siguienteNumero = turnosPremium.length + 1;
            if(turnosPremium.length==2){
                nuevoTurno = `P-${siguienteNumero+1}`;
            }
            else{
                nuevoTurno = `P-${siguienteNumero}`;

            }        } else {
            // Para clientes normales, el turno tendrá el prefijo 'G' seguido de un número incrementado
            const siguienteNumero = turnosNoPremium.length + 1;
            if(turnosPremium.length==2){
                nuevoTurno = `G-${siguienteNumero+1}`;
            }else{
                nuevoTurno = `G-${siguienteNumero}`;

            }
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