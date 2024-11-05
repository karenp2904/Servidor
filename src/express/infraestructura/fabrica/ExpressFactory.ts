
import CitaRouterExpress from "../../../cita/infraestructura/express/router/CitaRouterExpress"
import Server from "../server/Server"

export default class ExpressFactory{
    public static readonly create=(): Server=>{
    
        const citaRouterExpress= new CitaRouterExpress(citaControllerExpress)
        //to-do validate router

        const server= new Server([citaRouterExpress])
        //to-do validate server

        return server
    }
}