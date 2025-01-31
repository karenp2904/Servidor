import RouterExpress from "../../../../express/dominio/RouterExpress"
import TurnoControllerExpressPort from "../../../dominio/port/driver/expressDriver/controllerExpress/TurnoControllerExpressPort"
import TurnoRouterExpressPort from "../../../dominio/port/driver/expressDriver/routerExpress/TurnoRouterExpressPort"

export default class TurnoRouterExpress extends RouterExpress implements TurnoRouterExpressPort {

    constructor(private readonly turnoController: TurnoControllerExpressPort) {
        super()
        this.routes()
    }


    public routes = (): void => {
        this.obtenerTurnos()
        this.obtenerTurno()
        this.modificarCola()
        this.obtenerTurnoId()
        this.finalizarTurno()
    }


    obtenerTurnos(): void {
        this.router.get(
            '/sistema/turno/turnos',
            this.turnoController.obtenerTurnos.bind(this.turnoController)
            )
    }

    obtenerTurno(): void {
        this.router.post(
            '/sistema/turno/obtener',
            this.turnoController.obtenerTurno.bind(this.turnoController)
            )
    }

    obtenerTurnoId(): void {
        this.router.post(
            '/sistema/turno/obtenerId',
            this.turnoController.obtenerTurnoId.bind(this.turnoController)
            )
    }


    modificarCola(): void {
        this.router.post(
            '/sistema/turno/modificar',
            this.turnoController.modificarCola.bind(this.turnoController)
            )    
    }

    finalizarTurno(): void {
        this.router.post(
            '/sistema/turno/finalizar',
            this.turnoController.finalizarTurno.bind(this.turnoController)
            )    
    }

    
    
}