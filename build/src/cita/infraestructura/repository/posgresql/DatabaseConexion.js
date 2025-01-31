"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class DatabaseConexion {
    pool;
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'Citas',
            password: 'karen',
            port: 5432,
        });
        // Evento para verificar conexión exitosa
        this.pool.on('connect', () => {
            console.log('Conexión a la base de datos establecida exitosamente.');
        });
        // Evento para manejar errores de conexión
        this.pool.on('error', (error) => {
            console.error('Error en la conexión a la base de datos:', error);
        });
    }
    async query(text, params) {
        try {
            const result = await this.pool.query(text, params);
            return {
                rows: result.rows,
                rowCount: result.rowCount || 0
            };
        }
        catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    }
}
exports.default = DatabaseConexion;
