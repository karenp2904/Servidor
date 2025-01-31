import RouterExpress from "../../../../../../express/dominio/RouterExpress"

export default interface TurnoRouterExpressPort extends RouterExpress{
    
    obtenerTurnos():void
    obtenerTurno():void
    obtenerTurnoId():void
    modificarCola():void
    finalizarTurno():void
}