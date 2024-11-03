import CitaControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/CitaControllerExpressPort' 
import CitaRouterExpressPort from '../../../dominio/port/driver/expressDriver/routerExpress/CitaRouterExpressPort'
import RouterExpress from '../../../../express/dominio/RouterExpress'

export default class CitaRouterExpress extends RouterExpress implements CitaRouterExpressPort {

    constructor(private readonly citaController: CitaControllerExpressPort) {
        super()
        this.routes()
    }
    

    public routes = (): void => {
        this.obtenerCita()
        this.agendarCita()
        this.modificarCita()
        this.cancelarCita()
    }

    public obtenerCita = (): void => {
        this.router.get(
        '/sistema/citas/cita',
        this.citaController.obtenerCita.bind(this.citaController)
        )
    }

    public agendarCita(): void {
        this.router.get(
            '/sistema/citas/agendar',
            this.citaController.agendarCita.bind(this.citaController)
            )
    }
    public modificarCita(): void {
        this.router.get(
            '/sistema/citas/modificar',
            this.citaController.modificarCita.bind(this.citaController)
            )
    }
    public cancelarCita(): void {
        this.router.get(
            '/sistema/citas/cancelar',
            this.citaController.cancelarCita.bind(this.citaController)
            )
    }

    
}
