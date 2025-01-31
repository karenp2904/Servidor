"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnoControllerExpress {
    colaUseCase;
    agenteUseCase;
    constructor(colaUseCase, agenteUseCase) {
        this.colaUseCase = colaUseCase;
        this.agenteUseCase = agenteUseCase;
    }
    async obtenerTurnos(_req, res) {
        try {
            const respuesta = await this.colaUseCase.listaTurnos();
            res.status(200).json({ message: 'Cita', data: respuesta });
        }
        catch (error) {
            console.error("Error al obtener los turnos:", error);
            res.status(500).json({ message: 'Error al obtener los turnos', error: error });
        }
    }
    async obtenerTurno(req, res) {
        const { numerocita } = req.body;
        const respuesta = await this.colaUseCase.obtenerTurno(numerocita);
        res.status(200).json({ message: 'Cita', data: respuesta });
    }
    async obtenerTurnoId(req, res) {
        const { idTurno } = req.body;
        const respuesta = await this.colaUseCase.obtenerTurnoId(idTurno);
        res.status(200).json({ message: 'Cita', data: respuesta });
    }
    async modificarCola(req, res) {
        try {
            const { turnos } = req.body;
            const respuesta = await this.agenteUseCase.modificarCola(turnos);
            // Responder según el resultado
            if (respuesta) {
                res.status(200).json({ message: 'Cita modificada exitosamente.', data: respuesta });
            }
            else {
                res.status(500).json({ message: 'Error al modificar la cola de turnos.' });
            }
        }
        catch (error) {
            res.status(500).json({ message: 'Error interno en el servidor.', error: error });
        }
    }
    async finalizarTurno(req, res) {
        const { numerocita } = req.body;
        const respuesta = await this.agenteUseCase.eliminarTurno(numerocita);
        res.status(200).json({ message: 'Cita', data: respuesta });
    }
}
exports.default = TurnoControllerExpress;
