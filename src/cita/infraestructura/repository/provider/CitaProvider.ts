import Cita from "../../../dominio/model/cita/Cita";
import NullCita from "../../../dominio/model/cita/NullCita";
import ClienteProvider from "./ClientePorvider";
import CitaDatabaseAtributtes from "../../../dominio/types/CitaDatabaseAttributes";



export default class CitaProvider {

    public static get = async (citaData: CitaDatabaseAtributtes): Promise<Cita | NullCita> => {

        try {
            
            const { numerocita, fecha, hora, lugar, descripcion, asistencia, tipocita, anotaciones, idcliente } = citaData;
            

            const clienteInstance = await ClienteProvider.get(idcliente); 
            console.log(clienteInstance)
            // Crea una nueva instancia de Cita
            return new Cita({
                numeroCita: numerocita,
                fecha,
                hora,
                lugar,
                descripcion,
                asistencia,
                tipoCita: tipocita,
                anotaciones,
                cliente: clienteInstance,
            });

        } catch (error) {
            console.error(`Error al obtener el cliente con ID :`, error);
            return new NullCita(); // Retorna NullCita en caso de error
        }
    }

    
}
