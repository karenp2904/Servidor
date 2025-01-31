import TurnoService from "../../aplicacion/service/TurnoService"
import CitaUseCase from "../../aplicacion/useCase/CitaUseCase"
import ColaCitasUseCase from "../../aplicacion/useCase/ColaCitasUseCase"
import ColaCitaUseCasePort from "../../dominio/port/driver/useCaseDriver/ColaCitaUseCasePort"
import DatabaseConexion from "../repository/posgresql/DatabaseConexion"
import DatabaseControllerTurno from "../repository/posgresql/DatabaseControllerTurno"
import RepositoryTurno from "../repository/repo/RepositoryTurno"
import FactoryCitaService from "./FactoryCitaService"
import FactoryClienteUseCase from "./FactoryClienteUseCase"

export default class FactoryTurnoUseCase {
    public static readonly create = (): ColaCitaUseCasePort => {
        const dbConexion= new DatabaseConexion()

        const dbController= new DatabaseControllerTurno(dbConexion)
        const repositoryTurno= new RepositoryTurno(dbController)

        const turnoService= new TurnoService(repositoryTurno)

        const clienteUseCase= FactoryClienteUseCase.create()
        const citaUseCase= new CitaUseCase(FactoryCitaService.create(), clienteUseCase)
        
        return new ColaCitasUseCase(turnoService,clienteUseCase, citaUseCase)
    }
}