import Cita from "../../../dominio/model/cita/Cita";
import NullCita from "../../../dominio/model/cita/NullCita";
import ClienteProvider from "./ClientePorvider";
import CitaDatabaseAtributtes from "../../../dominio/types/CitaDatabaseAttributes";



export default class CitaProvider {

    public static get = async (citaData: CitaDatabaseAtributtes): Promise<Cita | NullCita> => {


        const { numeroCita, fecha, hora, lugar, descripcion, asistencia, tipoCita, anotaciones, idCliente } = citaData;

        if (!numeroCita || !fecha || !hora || !lugar || !descripcion || !asistencia || !tipoCita || !idCliente) {
            return new NullCita(); 
        }

        try {
            

            const clienteInstance = await ClienteProvider.get(idCliente); 

            // Crea una nueva instancia de Cita
            return new Cita({
                numeroCita,
                fecha,
                hora,
                lugar,
                descripcion,
                asistencia,
                tipoCita,
                anotaciones,
                cliente: clienteInstance,
            });

        } catch (error) {
            console.error(`Error al obtener el cliente con ID ${idCliente}:`, error);
            return new NullCita(); // Retorna NullCita en caso de error
        }
    }
}
