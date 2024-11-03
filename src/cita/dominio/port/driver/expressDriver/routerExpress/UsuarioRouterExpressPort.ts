import RouterExpress from "../../../../../../express/dominio/RouterExpress";

export default interface UsuarioRouterExpressPort extends RouterExpress{
    
    validarCredenciales():void

}