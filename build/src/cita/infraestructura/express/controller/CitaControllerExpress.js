"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CitaControllerExpress {
    citaUseCase;
    agenteUseCase;
    adminUseCase;
    constructor(citaUseCase, agenteUseCase, adminUseCase) {
        this.citaUseCase = citaUseCase;
        this.agenteUseCase = agenteUseCase;
        this.adminUseCase = adminUseCase;
    }
    async obtenerCita(req, res) {
        const { numerocita } = req.body;
        const respuesta = await this.citaUseCase.buscarCita(numerocita);
        res.status(200).json({ message: 'Cita', data: respuesta });
    }
    async agendarCita(req, res) {
        try {
            const citaAgendar = req.body;
            console.log(req.body);
            if (!citaAgendar.numeroCita || !citaAgendar.fecha || !citaAgendar.hora) {
                res.status(400).json({ message: 'Faltan datos requeridos para agendar la cita' });
                return;
            }
            const respuesta = await this.citaUseCase.agendarCita(citaAgendar, citaAgendar.cliente);
            res.status(200).json({ message: 'Cita agendada con éxito', data: respuesta });
        }
        catch (error) {
            console.error('Error al agendar cita:', error);
            // Responde con un error en caso de que algo falle
            res.status(500).json({ message: 'Error al agendar la cita', error: error });
        }
    }
    async cancelarCita(req, res) {
        const { numerocita } = req.body;
        const respuesta = await this.citaUseCase.eliminarCita(numerocita);
        res.status(200).json({ message: 'eliminarCita', data: respuesta });
    }
    async modificarCita(req, res) {
        const citaModificar = req.body;
        const respuesta = await this.citaUseCase.modificarCita(citaModificar);
        res.status(200).json({ message: 'modificarCita', data: respuesta });
    }
    async completarCita(req, res) {
        const citaModificar = req.body;
        console.log(citaModificar);
        const respuesta = await this.agenteUseCase.completarCita(citaModificar);
        res.status(200).json({ message: 'modificarCita', data: respuesta });
    }
    async citasAsistencia(_req, res) {
        const respuesta = await this.adminUseCase.listaCitasConAsistencia();
        console.log(respuesta);
        console.log('en asistencia');
        res.status(200).json({ message: 'citaAsistencia', data: respuesta });
    }
    async citasNoAsistencia(_req, res) {
        const respuesta = await this.adminUseCase.listaCitasSinAsistencia();
        console.log('en no asistencia');
        console.log(respuesta);
        res.status(200).json({ message: 'citaNoAsistencia', data: respuesta });
    }
}
exports.default = CitaControllerExpress;
