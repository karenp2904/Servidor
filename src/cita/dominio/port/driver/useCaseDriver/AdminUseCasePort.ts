import Cita from "../../../model/cita/Cita";

export default interface AdminUseCasePort{
    
    listaCitasConAsistencia:() => Promise<Cita[]>;
    listaCitasSinAsistencia:() => Promise<Cita[]>;

}