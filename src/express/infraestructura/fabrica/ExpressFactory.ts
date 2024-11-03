import CitaService from "../../../cita/aplicacion/service/CitaService"
import CitaUseCase from "../../../cita/aplicacion/useCase/CitaUseCase"
import CitaControllerExpress from "../../../cita/infraestructura/express/controller/CitaControllerExpress"
import CitaRouterExpress from "../../../cita/infraestructura/express/router/CitaRouterExpress"
import Server from "../server/Server"

export default class ExpressFactory{
    public static readonly create=(): Server=>{
        const citaService= new CitaService()
        const citaUseCase = new CitaUseCase(citaService)
        const citaControllerExpress= new CitaControllerExpress(citaUseCase)
        //to-do validate controller
        const citaRouterExpress= new CitaRouterExpress(citaControllerExpress)
        //to-do validate router

        const server= new Server([citaRouterExpress])
        //to-do validate server

        return server
    }
}