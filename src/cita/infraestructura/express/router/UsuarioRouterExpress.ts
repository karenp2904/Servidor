import RouterExpress from "../../../../express/dominio/RouterExpress"
import UsuarioControllerExpressPort from "../../../dominio/port/driver/expressDriver/controllerExpress/UsuarioControllerExpressPort"
import UsuarioRouterExpressPort from "../../../dominio/port/driver/expressDriver/routerExpress/UsuarioRouterExpressPort"

export default class UsuarioRouterExpress extends RouterExpress implements UsuarioRouterExpressPort {

    constructor(private readonly usuarioController: UsuarioControllerExpressPort) {
        super()
        this.routes()
    }
    

    public routes = (): void => {
        this.validarCredenciales()

    }


    public validarCredenciales(): void {
        this.router.get(
            '/sistema/usuario/login',
            this.usuarioController.validarCredenciales.bind(this.usuarioController)
            )
    }
    
    
}