
import AdminUseCase from "../../aplicacion/useCase/AdminUseCase"
import CitaUseCase from "../../aplicacion/useCase/CitaUseCase"
import CitaRouterExpressPort from "../../dominio/port/driver/expressDriver/routerExpress/CitaRouterExpressPort"
import CitaControllerExpress from "../express/controller/CitaControllerExpress"
import CitaRouterExpress from "../express/router/CitaRouterExpress"
import FactoryAgenteUseCase from "./FactoryAgenteUseCase"
import FactoryCitaService from "./FactoryCitaService"
import FactoryClienteUseCase from "./FactoryClienteUseCase"

export default class FactoryCitaRouter {
    public static readonly create = (): CitaRouterExpressPort  => {
        const clienteUseCase= FactoryClienteUseCase.create()
        const citaService= FactoryCitaService.create()

        const citaUseCase= new CitaUseCase(citaService,clienteUseCase)

        const adminUseCase = new AdminUseCase(citaService)

        const agenteUseCase= FactoryAgenteUseCase.create()

        const citaController= new CitaControllerExpress(citaUseCase,agenteUseCase,adminUseCase)
        return new CitaRouterExpress(citaController)
    }
}
