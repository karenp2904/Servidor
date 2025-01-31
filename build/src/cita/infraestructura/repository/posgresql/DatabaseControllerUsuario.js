"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseControllerUsuario {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    async validarUsuario(username, password) {
        try {
            const query = 'SELECT * FROM usuario WHERE usuario = $1';
            const results = await this.dbController.query(query, [username]);
            // Si no se encuentra el usuario, retornar falso
            if (results.rowCount === 0) {
                console.log('Usuario no encontrado');
                return false;
            }
            const user = results.rows[0];
            if (password == user?.contraseña) {
                console.log('Inicio de sesión exitoso');
                return true;
            }
            else {
                console.log('Contraseña incorrecta');
                return false;
            }
        }
        catch (error) {
            console.error('Error al validar usuario:', error);
            return false;
        }
    }
}
exports.default = DatabaseControllerUsuario;
