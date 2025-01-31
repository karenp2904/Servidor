import TurnoService from "../../aplicacion/service/TurnoService"
import AgenteUseCase from "../../aplicacion/useCase/AgenteUseCase"
import AgenteUseCasePort from "../../dominio/port/driver/useCaseDriver/AgenteUseCasePort"
import DatabaseConexion from "../repository/posgresql/DatabaseConexion"
import DatabaseControllerTurno from "../repository/posgresql/DatabaseControllerTurno"
import RepositoryTurno from "../repository/repo/RepositoryTurno"
import FactoryCitaService from "./FactoryCitaService"

export default class FactoryAgenteUseCase {
    public static readonly create = (): AgenteUseCasePort => {
        const dbConexion= new DatabaseConexion()

        const dbController= new DatabaseControllerTurno(dbConexion)
        const turnoRepository= new RepositoryTurno(dbController)
        const colaCitaService= new TurnoService(turnoRepository)

        const citaService= FactoryCitaService.create()
        return new AgenteUseCase(colaCitaService,citaService)
    }
}