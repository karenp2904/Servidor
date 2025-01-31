import CitaService from "../../aplicacion/service/CitaService";
import CitaServicePort from "../../dominio/port/driver/serviceDriver/CitaServicePort";
import DatabaseConexion from "../repository/posgresql/DatabaseConexion";
import DatabaseControllerCita from "../repository/posgresql/DatabaseControllerCita";
import RepositoryCita from "../repository/repo/RepositoryCita";

export default class FactoryCitaService {
    public static readonly create = (): CitaServicePort  => {
        const dbConexion= new DatabaseConexion()

        const dbControllerCita= new DatabaseControllerCita(dbConexion)
        const citaRepository= new RepositoryCita(dbControllerCita)

        return new CitaService(citaRepository)
    }
}