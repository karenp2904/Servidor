
import FactoryCitaRouter from "../../../cita/infraestructura/factory/FactoryCitaRouter"
import FactoryClienteRouter from "../../../cita/infraestructura/factory/FactoryClienteRouter"
import FactoryTurnoRouter from "../../../cita/infraestructura/factory/FactoryTurnoRouter"
import FactoryUsuarioRouter from "../../../cita/infraestructura/factory/FactoryUsuarioRouter"
import Server from "../server/Server"

export default class ExpressFactory{
    public static readonly create=(): Server=>{
    
        const citaRouterExpress= FactoryCitaRouter.create()
        const clienteRouterExpress= FactoryClienteRouter.create()
        const turnoRouterExpress= FactoryTurnoRouter.create()
        const usuarioRouterExpress= FactoryUsuarioRouter.create()

        const server= new Server([citaRouterExpress,clienteRouterExpress,turnoRouterExpress,usuarioRouterExpress])

        return server
    }
}