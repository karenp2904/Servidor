import RouterExpress from '../../../../express/dominio/RouterExpress'
import ClienteControllerExpressPort from '../../../dominio/port/driver/expressDriver/controllerExpress/ClienteControllerExpressPort'
import ClienteRouterExpressPort from '../../../dominio/port/driver/expressDriver/routerExpress/ClienteRouterExpressPort'

export default class ClienteRouterExpress extends RouterExpress implements ClienteRouterExpressPort {

    constructor(private readonly clienteController: ClienteControllerExpressPort) {
        super()
        this.routes()
    }


    public routes = (): void => {
        this.obtenerCliente()
    }

    public obtenerCliente(): void {
        this.router.get(
            '/sistema/cliente/obtener',
            this.clienteController.obtenerCliente.bind(this.clienteController)
            )
    }
    
    
}
