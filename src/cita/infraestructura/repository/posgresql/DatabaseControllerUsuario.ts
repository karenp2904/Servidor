import UsuarioDatabaseAtributtes from "../../../dominio/types/UsuarioDatabaseAttributes";
import DatabaseConexion from "./DatabaseConexion";

export default class DatabaseControllerUsuario {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }


    public async validarUsuario(username: string, password: string): Promise<boolean> {
        try {
            const query = 'SELECT * FROM users WHERE username = $1';
            const results = await this.dbController.query<UsuarioDatabaseAtributtes>(query, [username]);

            // Si no se encuentra el usuario, retornar falso
            if (results.length === 0) {
                console.log('Usuario no encontrado');
                return false;
            }

            const user = results[0];

            if(password == user?.contraseña){
                console.log('Inicio de sesión exitoso');
                return true;
            } else {
                console.log('Contraseña incorrecta');
                return false;
            }
        } catch (error) {
            console.error('Error al validar usuario:', error);
            throw error;
        }
    }
}