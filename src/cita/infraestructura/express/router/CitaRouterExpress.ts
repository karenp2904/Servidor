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
        this.completarCita()
        
        this.citasAsistencia()
        this.citasNoAsistencia()
    }

    public obtenerCita = (): void => {
        this.router.post(
        '/sistema/citas/cita',
        this.citaController.obtenerCita.bind(this.citaController)
        )
    }

    public agendarCita(): void {
        this.router.post(
            '/sistema/citas/agendar',
            this.citaController.agendarCita.bind(this.citaController)
            )
    }
    public modificarCita(): void {
        this.router.post(
            '/sistema/citas/modificar',
            this.citaController.modificarCita.bind(this.citaController)
            )
    }
    public cancelarCita(): void {
        this.router.post(
            '/sistema/citas/cancelar',
            this.citaController.cancelarCita.bind(this.citaController)
            )
    }

    public completarCita(): void { //completar campos
        this.router.post(
            '/sistema/citas/completar',
            this.citaController.completarCita.bind(this.citaController)
            )
    }

    public citasAsistencia(): void { 
        this.router.get(
            '/sistema/admin/citasAsistencia',
            this.citaController.citasAsistencia.bind(this.citaController)
            )
    }

    public citasNoAsistencia(): void {
        this.router.get(
            '/sistema/admin/citasNoAsistencia',
            this.citaController.citasNoAsistencia.bind(this.citaController)
            )
    }

    
}
