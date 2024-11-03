import Cita from "../../dominio/model/cita/Cita";
import AdminUseCasePort from "../../dominio/port/driver/useCaseDriver/AdminUseCasePort";

export default class AdminUseCase implements AdminUseCasePort{


    public listaCitasConAsistencia = () :Cita[] => {
        return [];
    } 

    public listaCitasSinAsistencia = () :Cita[] => {
        return [];
    } 
    
    

}