import TurnoRouterExpressPort from "../../dominio/port/driver/expressDriver/routerExpress/TurnoRouterExpressPort"
import TurnoControllerExpress from "../express/controller/TurnoControllerExpress"
import TurnoRouterExpress from "../express/router/TurnoRouterExpress"
import FactoryAgenteUseCase from "./FactoryAgenteUseCase"
import FactoryTurnoUseCase from "./FactoryTurnoUseCase"

export default class FactoryTurnoRouter {
    public static readonly create = (): TurnoRouterExpressPort  => {
            const agenteUseCase= FactoryAgenteUseCase.create()
            const turnoUseCase= FactoryTurnoUseCase.create()
            const agenteController= new TurnoControllerExpress(turnoUseCase,agenteUseCase)
            return new TurnoRouterExpress(agenteController)
        }
}

    

