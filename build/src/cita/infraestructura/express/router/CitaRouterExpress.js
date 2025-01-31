"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterExpress_1 = __importDefault(require("../../../../express/dominio/RouterExpress"));
class CitaRouterExpress extends RouterExpress_1.default {
    citaController;
    constructor(citaController) {
        super();
        this.citaController = citaController;
        this.routes();
    }
    routes = () => {
        this.obtenerCita();
        this.agendarCita();
        this.modificarCita();
        this.cancelarCita();
        this.completarCita();
        this.citasAsistencia();
        this.citasNoAsistencia();
    };
    obtenerCita = () => {
        this.router.post('/sistema/citas/cita', this.citaController.obtenerCita.bind(this.citaController));
    };
    agendarCita() {
        this.router.post('/sistema/citas/agendar', this.citaController.agendarCita.bind(this.citaController));
    }
    modificarCita() {
        this.router.post('/sistema/citas/modificar', this.citaController.modificarCita.bind(this.citaController));
    }
    cancelarCita() {
        this.router.post('/sistema/citas/cancelar', this.citaController.cancelarCita.bind(this.citaController));
    }
    completarCita() {
        this.router.post('/sistema/citas/completar', this.citaController.completarCita.bind(this.citaController));
    }
    citasAsistencia() {
        this.router.get('/sistema/admin/citasAsistencia', this.citaController.citasAsistencia.bind(this.citaController));
    }
    citasNoAsistencia() {
        this.router.get('/sistema/admin/citasNoAsistencia', this.citaController.citasNoAsistencia.bind(this.citaController));
    }
}
exports.default = CitaRouterExpress;
