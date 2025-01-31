"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioService_1 = __importDefault(require("../../aplicacion/service/UsuarioService"));
const UsuarioUseCase_1 = __importDefault(require("../../aplicacion/useCase/UsuarioUseCase"));
const UsuarioControllerExpress_1 = __importDefault(require("../express/controller/UsuarioControllerExpress"));
const UsuarioRouterExpress_1 = __importDefault(require("../express/router/UsuarioRouterExpress"));
const DatabaseConexion_1 = __importDefault(require("../repository/posgresql/DatabaseConexion"));
const DatabaseControllerUsuario_1 = __importDefault(require("../repository/posgresql/DatabaseControllerUsuario"));
const RepositoryUsuario_1 = __importDefault(require("../repository/repo/RepositoryUsuario"));
class FactoryUsuarioRouter {
    static create = () => {
        const dbConexion = new DatabaseConexion_1.default();
        const dbController = new DatabaseControllerUsuario_1.default(dbConexion);
        const repositoryUser = new RepositoryUsuario_1.default(dbController);
        const userService = new UsuarioService_1.default(repositoryUser);
        const userCase = new UsuarioUseCase_1.default(userService);
        const controllerRouter = new UsuarioControllerExpress_1.default(userCase);
        return new UsuarioRouterExpress_1.default(controllerRouter);
    };
}
exports.default = FactoryUsuarioRouter;
