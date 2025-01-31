import UsuarioService from "../../aplicacion/service/UsuarioService"
import UsuarioUseCase from "../../aplicacion/useCase/UsuarioUseCase"
import UsuarioRouterExpressPort from "../../dominio/port/driver/expressDriver/routerExpress/UsuarioRouterExpressPort"
import UsuarioControllerExpress from "../express/controller/UsuarioControllerExpress"
import UsuarioRouterExpress from "../express/router/UsuarioRouterExpress"
import DatabaseConexion from "../repository/posgresql/DatabaseConexion"
import DatabaseControllerUsuario from "../repository/posgresql/DatabaseControllerUsuario"
import RepositoryUsuario from "../repository/repo/RepositoryUsuario"

export default class FactoryUsuarioRouter {
    public static readonly create = (): UsuarioRouterExpressPort => {
        const dbConexion= new DatabaseConexion()

        const dbController= new DatabaseControllerUsuario(dbConexion)
        const repositoryUser= new RepositoryUsuario(dbController)

        const userService= new UsuarioService(repositoryUser)
        
        const userCase= new UsuarioUseCase(userService)

        const controllerRouter= new UsuarioControllerExpress(userCase)
        
        return new UsuarioRouterExpress(controllerRouter)
    }
}