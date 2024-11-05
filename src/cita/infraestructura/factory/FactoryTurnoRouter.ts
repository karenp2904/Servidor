import ColaCitasUseCase from "../../aplicacion/useCase/ColaCitasUseCase"
import TurnoRouterExpressPort from "../../dominio/port/driver/expressDriver/routerExpress/TurnoRouterExpressPort"

export default class FactoryCitaRouter {
    public static readonly create = (): TurnoRouterExpressPort  => {
        const citaService= new ()
        const citaUseCase= new ColaCitasUseCase(citaService,)
        const citaController= new CitaControllerExpress(citaUseCase)
        return new CitaRouterExpress(citaController)
    }
}
