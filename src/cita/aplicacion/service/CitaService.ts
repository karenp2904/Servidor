import Cita from "../../dominio/model/cita/Cita";
import NullCita from "../../dominio/model/cita/NullCita";
import CitaRepositoryPort from "../../dominio/port/driven/CitaRepositoryPort";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort";
import CitaDatabaseAtributtes from "../../dominio/types/CitaDatabaseAttributes";
import CitaProvider from "../../infraestructura/repository/provider/CitaProvider";

export default class CitaService implements CitaServicePort {
    

    constructor(private readonly citaRepository: CitaRepositoryPort) {}


    public async agendarCita(cita: Cita): Promise<boolean> {
        try {
            const clienteCita= cita.getCliente()
            const citaDb: CitaDatabaseAtributtes={
                numeroCita: cita.getNumeroCita(),        
                fecha:  cita.getFecha(),
                hora:  cita.getHora(),  
                lugar:  cita.getLugar(),  
                descripcion:  cita.getDescripcion(),  
                asistencia:  cita.getAsistencia(),  
                tipoCita:  cita.getTipoCita(),  
                anotaciones:  cita.getAnotaciones(),  
                idCliente:  clienteCita.getId(),   
            }
            const respuesta= await this.citaRepository.save(citaDb)
            if(respuesta){
                return true
            }else{
                return false;
            }
        } catch (error) {
            console.error("Error al agendar cita:", error);
            return false;
        }
    } 
    
    public async modificarCita(cita: Cita): Promise<boolean> {
        try {
            const clienteCita= cita.getCliente()
            const citaDb: CitaDatabaseAtributtes={
                numeroCita: cita.getNumeroCita(),        
                fecha:  cita.getFecha(),
                hora:  cita.getHora(),  
                lugar:  cita.getLugar(),  
                descripcion:  cita.getDescripcion(),  
                asistencia:  cita.getAsistencia(),  
                tipoCita:  cita.getTipoCita(),  
                anotaciones:  cita.getAnotaciones(),  
                idCliente:  clienteCita.getId(),   
            }
            const respuesta= await this.citaRepository.update(cita.getNumeroCita(),citaDb)
            if(respuesta){
                return true
            }else{
                return false;
            }
        } catch (error) {
            console.error("Error al modificar cita:", error);
            return false;
        }
    }

    public async eliminarCita(numeroCita: string): Promise<boolean> {
        try {
            const respuesta= await this.citaRepository.delete(numeroCita)
            return respuesta;
        } catch (error) {
            console.error("Error al eliminar cita:", error);
            return false;
        }
    }

    public async buscarCita(numeroCita: string): Promise<Cita > {
        try {
            const citaDb= await this.citaRepository.findById(numeroCita)
            if(citaDb){
                if(citaDb.numeroCita){
                    console.log(await CitaProvider.get(citaDb) + 'en serviceCita')
                    return await CitaProvider.get(citaDb)
                }else{
                    return new NullCita() //temporal
                }
            }else{
                return new NullCita() //temporal
            }
            
        } catch (error) {
            console.error("Error al buscar la cita:", error);
            return new NullCita();
        }
    }

    public async buscarCitasPorCliente(idCliente: string): Promise<Cita[]> {
        try {
            console.log(idCliente)
            //POR AHORA NO SE EN DONDE SE USA
            const citas: Cita[] = []; //temporal
            
            return citas;
        } catch (error) {
            console.error("Error al buscar citas por cliente:", error);
            return [];
        }
    }

    public async listaCitas(): Promise<Cita[]> {
        try {
            const citasData = await this.citaRepository.findAll();

            const citas = citasData.map(citaData => CitaProvider.get(citaData));

            return await Promise.all(citas);
        } catch (error) {
            console.error("Error al buscar citas:", error);
            return [];
        }
    }

}
