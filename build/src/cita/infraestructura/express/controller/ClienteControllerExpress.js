"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClienteControllerExpress {
    clienteUseCase;
    constructor(clienteUseCase) {
        this.clienteUseCase = clienteUseCase;
    }
    async obtenerCliente(req, res) {
        try {
            const { numerocita } = req.body;
            const respuesta = await this.clienteUseCase.obtenerClientePorCita(numerocita);
            res.status(200).json({ message: 'Cliente', data: respuesta });
        }
        catch (error) {
            console.error('Error en obtenerCliente:', error);
            res.status(500).json({ message: 'Error al obtenerCliente ', error: error });
        }
    }
}
exports.default = ClienteControllerExpress;
