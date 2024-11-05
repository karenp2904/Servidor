import TurnoDatabaseAtributtes from "../../types/TurnoDatabaseAttributes";
import Repository from "../repository/RepositoryInterface";

export default interface TurnoRepositoryPort extends Repository<number, TurnoDatabaseAtributtes> {
    updateAll(items: Partial<TurnoDatabaseAtributtes>[]) : Promise<boolean[]>
}