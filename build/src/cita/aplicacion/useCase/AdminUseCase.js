"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminUseCase {
    citaService;
    constructor(citaService) {
        this.citaService = citaService;
    }
    listaCitasConAsistencia = async () => {
        try {
            const citasData = await this.citaService.listaCitas();
            // Filtra citas con asistencia "sí"
            const citas = citasData.filter(cita => cita.getAsistencia() === "si");
            console.log(citas);
            return citas;
        }
        catch (error) {
            console.error('Error en listaCitasConAsistencia:', error);
            return [];
        }
    };
    listaCitasSinAsistencia = async () => {
        try {
            const citas = await this.citaService.listaCitas();
            // Filtra citas sin asistencia "no"
            return await citas.filter(cita => cita.getAsistencia() === "no");
        }
        catch (error) {
            console.error('Error en listaCitasSinAsistencia:', error);
            return [];
        }
    };
}
exports.default = AdminUseCase;
