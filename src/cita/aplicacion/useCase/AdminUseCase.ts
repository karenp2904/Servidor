import Cita from "../../dominio/model/cita/Cita";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort";
import AdminUseCasePort from "../../dominio/port/driver/useCaseDriver/AdminUseCasePort";

export default class AdminUseCase implements AdminUseCasePort{

    constructor(private readonly citaService: CitaServicePort) {}

    public listaCitasConAsistencia = async (): Promise<Cita[]> => {
        try {
            const citasData = await this.citaService.listaCitas();
    
            // Filtra citas con asistencia "sí"
            const citas= citasData.filter(cita => cita.getAsistencia() === "si");
            console.log(citas)
            return citas
        } catch (error) {
            console.error('Error en listaCitasConAsistencia:', error);
            return [];
        }
    };
    
    
    

    public listaCitasSinAsistencia = async (): Promise<Cita[]> => {
        try {
            const citas = await this.citaService.listaCitas();
            // Filtra citas sin asistencia "no"
            return await citas.filter(cita => cita.getAsistencia() === "no");
        } catch (error) {
            console.error('Error en listaCitasSinAsistencia:', error);
            return [];
        }
    }; 
    
    

}