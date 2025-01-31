"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryUsuario {
    dbController;
    constructor(dbController) {
        this.dbController = dbController;
    }
    async validarUsuario(username, password) {
        return await this.dbController.validarUsuario(username, password);
    }
    findAll = () => {
        throw new Error("Method not implemented.");
    };
    findById = (_id) => {
        throw new Error("Method not implemented.");
    };
    save = (_item) => {
        throw new Error("Method not implemented.");
    };
    update = (_id, _item) => {
        throw new Error("Method not implemented.");
    };
    delete = (_id) => {
        throw new Error("Method not implemented.");
    };
}
exports.default = RepositoryUsuario;
