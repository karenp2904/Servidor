import Cita from "../../../model/cita/Cita";

export default interface CitaServicePort{

    agendarCita: (cita: Cita)=> Promise<boolean>;
    modificarCita: (cita: Cita)=> Promise<boolean>;
    eliminarCita: (numeroCita: string)=> Promise<boolean>;
    buscarCita: (numeroCita: string)=> Promise<Cita>;
    buscarCitasPorCliente:(idCliente:string)=>Promise<Cita[]>;

    listaCitas:()=>Promise<Cita[]>;



}