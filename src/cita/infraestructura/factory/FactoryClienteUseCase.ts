import ClienteService from "../../aplicacion/service/ClienteService"
import ClienteUseCase from "../../aplicacion/useCase/ClienteUseCase"
import ClienteUseCasePort from "../../dominio/port/driver/useCaseDriver/ClienteUseCasePort"
import DatabaseConexion from "../repository/posgresql/DatabaseConexion"
import DatabaseControllerClientes from "../repository/posgresql/DatabaseControllerCliente"
import RepositoryCliente from "../repository/repo/RepositoryCliente"

export default class FactoryClienteUseCase {
    public static readonly create = (): ClienteUseCasePort => {
        const dbConexion= new DatabaseConexion()

        const dbControllerC= new DatabaseControllerClientes(dbConexion)
        const clienteRepository= new RepositoryCliente(dbControllerC)
        const clienteService= new ClienteService(clienteRepository)

        return new ClienteUseCase(clienteService)
    }
}