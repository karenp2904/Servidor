import CitaService from "../../aplicacion/service/CitaService"
import CitaUseCase from "../../aplicacion/useCase/CitaUseCase"
import CitaRouterExpressPort from "../../dominio/port/driver/expressDriver/routerExpress/CitaRouterExpressPort"
import CitaControllerExpress from "../express/controller/CitaControllerExpress"
import CitaRouterExpress from "../express/router/CitaRouterExpress"

export default class FactoryCitaRouter {
    public static readonly create = (): CitaRouterExpressPort  => {
        const citaService= new CitaService()
        const citaUseCase= new CitaUseCase(citaService)
        const citaController= new CitaControllerExpress(citaUseCase)
        return new CitaRouterExpress(citaController)
    }
}
