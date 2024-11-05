import UsuarioRepositoryPort from "../../../dominio/port/driven/UsuarioRepositoryPort";
import UsuarioDatabaseAtributtes from "../../../dominio/types/UsuarioDatabaseAttributes";
import DatabaseControllerUsuario from "../posgresql/DatabaseControllerUsuario";

export default class RepositoryUsuario implements UsuarioRepositoryPort{

    private dbController: DatabaseControllerUsuario;

    constructor(dbController: DatabaseControllerUsuario) {
        this.dbController = dbController;
    }

    public async validarUsuario(username: string, password: string): Promise<boolean> {
        return await this.dbController.validarUsuario(username, password);
    }

    findAll = (): Promise<UsuarioDatabaseAtributtes[]> => {
        throw new Error("Method not implemented.")
    }

    findById = (_id: string): Promise<UsuarioDatabaseAtributtes> => {
        throw new Error("Method not implemented.")
    }
    save = (_item: UsuarioDatabaseAtributtes): Promise<UsuarioDatabaseAtributtes> => {
    throw new Error("Method not implemented.")
    }
    update = (_id: string, _item: Partial<UsuarioDatabaseAtributtes>): Promise<boolean | UsuarioDatabaseAtributtes> => {
    throw new Error("Method not implemented.")
    }
    delete = (_id: string): Promise<boolean> => {
    throw new Error("Method not implemented.")
    }




}