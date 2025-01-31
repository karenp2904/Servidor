"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterExpress_1 = __importDefault(require("../../../../express/dominio/RouterExpress"));
class TurnoRouterExpress extends RouterExpress_1.default {
    turnoController;
    constructor(turnoController) {
        super();
        this.turnoController = turnoController;
        this.routes();
    }
    routes = () => {
        this.obtenerTurnos();
        this.obtenerTurno();
        this.modificarCola();
        this.obtenerTurnoId();
        this.finalizarTurno();
    };
    obtenerTurnos() {
        this.router.get('/sistema/turno/turnos', this.turnoController.obtenerTurnos.bind(this.turnoController));
    }
    obtenerTurno() {
        this.router.post('/sistema/turno/obtener', this.turnoController.obtenerTurno.bind(this.turnoController));
    }
    obtenerTurnoId() {
        this.router.post('/sistema/turno/obtenerId', this.turnoController.obtenerTurnoId.bind(this.turnoController));
    }
    modificarCola() {
        this.router.post('/sistema/turno/modificar', this.turnoController.modificarCola.bind(this.turnoController));
    }
    finalizarTurno() {
        this.router.post('/sistema/turno/finalizar', this.turnoController.finalizarTurno.bind(this.turnoController));
    }
}
exports.default = TurnoRouterExpress;
