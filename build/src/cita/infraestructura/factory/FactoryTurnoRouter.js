"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TurnoControllerExpress_1 = __importDefault(require("../express/controller/TurnoControllerExpress"));
const TurnoRouterExpress_1 = __importDefault(require("../express/router/TurnoRouterExpress"));
const FactoryAgenteUseCase_1 = __importDefault(require("./FactoryAgenteUseCase"));
const FactoryTurnoUseCase_1 = __importDefault(require("./FactoryTurnoUseCase"));
class FactoryTurnoRouter {
    static create = () => {
        const agenteUseCase = FactoryAgenteUseCase_1.default.create();
        const turnoUseCase = FactoryTurnoUseCase_1.default.create();
        const agenteController = new TurnoControllerExpress_1.default(turnoUseCase, agenteUseCase);
        return new TurnoRouterExpress_1.default(agenteController);
    };
}
exports.default = FactoryTurnoRouter;
