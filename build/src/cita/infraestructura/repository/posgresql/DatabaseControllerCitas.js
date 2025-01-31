"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseControllerCitas {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    obtenerTodasLasCitas = async () => {
        try {
            const query = `SELECT * FROM cita`;
            const results = await this.dbController.query(query, []);
            return results;
        }
        catch (error) {
            console.error("Error al obtener todas las citas:", error);
            return [];
        }
    };
}
exports.default = DatabaseControllerCitas;
