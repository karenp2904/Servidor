import ClienteRouterExpressPort from "../../dominio/port/driver/expressDriver/routerExpress/ClienteRouterExpressPort"
import ClienteControllerExpress from "../express/controller/ClienteControllerExpress"
import ClienteRouterExpress from "../express/router/ClienteRouterExpress"
import FactoryClienteUseCase from "./FactoryClienteUseCase"

export default class FactoryClienteRouter {
    public static readonly create = (): ClienteRouterExpressPort  => {
        const clienteUseCase= FactoryClienteUseCase.create()
        const clienteController= new ClienteControllerExpress(clienteUseCase)
        return new ClienteRouterExpress(clienteController)
    }
}