import Cita from "../../dominio/model/cita/Cita";
import Turno from "../../dominio/model/turno/Turno";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort";
import ColaCitaServicePort from "../../dominio/port/driver/serviceDriver/ColaCitaServicePort";
import AgenteUseCasePort from "../../dominio/port/driver/useCaseDriver/AgenteUseCasePort";
import ChangeProvider from "../../infraestructura/repository/provider/ChangeType";

export default class AgenteUseCase implements AgenteUseCasePort{

    constructor(
        private readonly colaCitaService: ColaCitaServicePort, // Inyectar el servicio de ColaCita
        private readonly citaService: CitaServicePort
    ) {}

    public obtenerCola = async (): Promise<Turno[]> => {
        return await this.colaCitaService.listaTurnos(); // Obtener la lista de turnos actual desde el servicio
    };

    public modificarCola = async (lista: Turno[]): Promise<boolean> => {
        try {

            const nuevaLista= lista.map(item => ChangeProvider.getInterfaceTurno(item));
    
            console.log('Lista de turnos actualizada Agente:', nuevaLista);
            
            // Reasignar los puestos según el nuevo orden en la lista
            nuevaLista.forEach((turno, index) => {
                turno.setPuesto(index + 1) // Asigna la posición empezando desde 1
            });

            console.log('listamodificada' + nuevaLista)

            const resultado = await this.colaCitaService.modificarCola(nuevaLista);
            return resultado; // Retorna el resultado del servicio
        } catch (error) {
            console.error('Error en modificarCola:', error);
            return false; // Retorna false en caso de error
        }
    };

    public completarCita = async (cita: Cita): Promise<boolean> => {
        try {
            const citaType= ChangeProvider.getInterfaceCita(cita)

            const resultado = await this.citaService.modificarCita(citaType)
            return resultado; // Retorna el resultado del servicio
        } catch (error) {
            console.error('Error en completar:', error);
            return false; // Retorna false en caso de error
        }
    };

    public eliminarTurno = async (numeroCita: string): Promise<boolean> => {
        try {
            const resultado = await this.colaCitaService.eliminarTurno(numeroCita)
            return resultado; // Retorna el resultado del servicio
        } catch (error) {
            console.error('Error en completar:', error);
            return false; // Retorna false en caso de error
        }
    };

}
