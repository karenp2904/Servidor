import Cita from "../../../model/cita/Cita";

export default interface AdminUseCasePort{
    
    listaCitasConAsistencia:() => Cita[];
    listaCitasSinAsistencia:() => Cita[];

}