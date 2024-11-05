import Cita from "../../dominio/model/cita/Cita";
import NullCita from "../../dominio/model/cita/NullCita";
import Cliente from "../../dominio/model/cliente/Cliente";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort";
import CitaUseCasePort from "../../dominio/port/driver/useCaseDriver/CitaUseCasePort";
import ClienteUseCasePort from "../../dominio/port/driver/useCaseDriver/ClienteUseCasePort";

export default class CitaUseCase implements CitaUseCasePort {

    constructor(
        private readonly citaService: CitaServicePort,
        private readonly clienteUseCase: ClienteUseCasePort
    ) {}

    public agendarCita = async (cita: Cita): Promise<boolean> => {
        try {
            const agregarCliente= await this.clienteUseCase.agregarCliente(cita.getCliente())
            console.log(agregarCliente)
            const respuesta = await this.citaService.agendarCita(cita);
            console.log('agendarCitaUse:', respuesta);
            return respuesta;
        } catch (error) {
            console.error('Error en agendarCitaUse:', error);
            return false;
        }
    }

    public modificarCita = async (cita: Cita): Promise<boolean> => {
        try {
            const respuesta = await this.citaService.modificarCita(cita);
            console.log('modificarCitaUse:', respuesta);
            return respuesta;
        } catch (error) {
            console.error('Error en modificarCitaUse:', error);
            return false;
        }
    }

    public eliminarCita = async (numeroCita: string): Promise<boolean> => {
        try {
            const respuesta = await this.citaService.eliminarCita(numeroCita);
            console.log('eliminarCitaUse:', respuesta);
            return respuesta;
        } catch (error) {
            console.error('Error en eliminarCitaUse:', error);
            return false;
        }
    }

    public buscarCita = async (numeroCita: string): Promise<Cita> => {
        try {
            const cita = await this.citaService.buscarCita(numeroCita);
            return cita; // Devuelve la cita encontrada
        } catch (error) {
            console.error('Error en buscarCita:', error);
            return new NullCita(); // Devuelve una instancia de NullCita en caso de error
        }
    }

    public buscarCitasPorCliente = async (cliente: Cliente): Promise<Cita[]> => {
        try {
            const citas = await this.citaService.buscarCitasPorCliente(cliente.getId());
            return citas; // Devuelve las citas encontradas
        } catch (error) {
            console.error('Error en buscarCitasPorCliente:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    }
}
