import RouterExpress from "../../../../../../express/dominio/RouterExpress";

export default interface CitaRouterExpressPort extends RouterExpress{
    
    agendarCita():void
    modificarCita():void
    cancelarCita():void
    obtenerCita():void

}