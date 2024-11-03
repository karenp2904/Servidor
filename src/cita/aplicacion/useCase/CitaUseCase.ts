import Cita from "../../dominio/model/cita/Cita"
import NullCita from "../../dominio/model/cita/NullCita";
import Cliente from "../../dominio/model/cliente/Cliente";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort"
import CitaUseCasePort from "../../dominio/port/driver/useCaseDriver/CitaUseCasePort"

export default class CitaUseCase implements CitaUseCasePort{

    constructor(private readonly citaService: CitaServicePort){}


    public  agendarCita = (cita: Cita) :boolean => {
        this.citaService.agendarCita(cita)
        .then((respuesta) => {
            console.log('agendarCitaUse:', respuesta);
            return respuesta;
        })
        .catch((error) => {
            console.error('Error en agendarCitaUse:', error);
            return false;
        });
        return false; // la respuesta real ocurre en el .then()
    } 
    
    public modificarCita = (cita: Cita) :boolean => {
        this.citaService.modificarCita(cita)
        .then((respuesta) => {
            console.log('modificarCitaUse:', respuesta);
            return respuesta;
        })
        .catch((error) => {
            console.error('Error en modificarCitaUse:', error);
            return false;
        });
        return false; // la respuesta real ocurre en el .then()
    } 

    public eliminarCita =(numeroCita: string) :boolean => {
        this.citaService.eliminarCita(numeroCita)
        .then((respuesta) => {
            console.log('eliminarCitaUse:', respuesta);
            return respuesta;
        })
        .catch((error) => {
            console.error('Error en eliminarCitaUse:', error);
            return false;
        });
        return false; // la respuesta real ocurre en el .then()
    } 

    public buscarCita = async (numeroCita: string): Promise<Cita> => {
        try {
            const citaa = await this.citaService.buscarCita(numeroCita);
            return citaa; // Devuelve la cita encontrada
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