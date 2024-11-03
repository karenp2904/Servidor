import Cita from "../../dominio/model/cita/Cita";
import AgenteUseCasePort from "../../dominio/port/driver/useCaseDriver/AgenteUseCasePort";

export default class AgenteUseCase implements AgenteUseCasePort{


    public obtenerColaCitas = () :Cita[]=> {
        return [];
    } 

    public modificarCola = (lista: Cita[]) :boolean=> {
        return true;
    } 

    public completarCita = (cita: Cita) :boolean=> {
        return true;
    } 

    public finalizarCita = (cita: Cita) :boolean=> {
        return true;
    } 


}
