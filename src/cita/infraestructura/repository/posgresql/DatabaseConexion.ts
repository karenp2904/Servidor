
import { Pool, QueryResultRow } from 'pg';

export default class DatabaseConexion {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
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

    public async query<T extends QueryResultRow>(text: string, params: any[]): Promise<{ rows: T[], rowCount: number }> {
        try {
            const result = await this.pool.query<T>(text, params);
            
            return {
                rows: result.rows,
                rowCount: result.rowCount || 0
            };
        } catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    }
    
}