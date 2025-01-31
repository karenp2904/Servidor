import Cita from "../../../dominio/model/cita/Cita";
import Cliente from "../../../dominio/model/cliente/Cliente";
import Turno from "../../../dominio/model/turno/Turno";


export default class ChangeProvider {
    
    public static getInterfaceCita(cita: any): Cita{
        return new Cita({
            numeroCita: cita.numeroCita, 
            fecha: cita.fecha,
            hora: cita.hora,
            lugar: cita.lugar,
            descripcion: cita.descripcion,
            asistencia: cita.asistencia || '',
            tipoCita: cita.tipoCita,
            anotaciones: cita.anotaciones || '',
            cliente: cita.cliente, 
        });
    }

    public static getInterfaceCliente(data: any): Cliente {

        return new Cliente({
            id: data.id,
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            direccion: data.direccion,
            tipoCliente: data.tipoCliente || '' // Si existe, se asigna
        });
    }

    public static getInterfaceTurno(data: any): Turno {

        return new Turno({
            idTurno: data.idTurno,
            idCita: data.idCita,
            puesto: data.puesto,
            turno: data.turno,
        });
    }
}