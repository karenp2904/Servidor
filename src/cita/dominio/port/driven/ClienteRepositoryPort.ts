import ClienteDatabaseAtributtes from "../../types/ClienteDatabaseAttributes";
import Repository from "../repository/RepositoryInterface";

export default interface ClienteRepositoryPort extends Repository<string, ClienteDatabaseAtributtes> {
    findByCita: (id: string) => Promise<ClienteDatabaseAtributtes>
}