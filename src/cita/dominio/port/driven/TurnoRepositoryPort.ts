import TurnoDatabaseAtributtes from "../../types/TurnoDatabaseAttributes";
import Repository from "../repository/RepositoryInterface";

export default interface TurnoRepositoryPort extends Repository<string, TurnoDatabaseAtributtes> {
    updateAll(items: Partial<TurnoDatabaseAtributtes>[]) : Promise<boolean[]>
    deleteByIdCita: (id: string) => Promise<boolean>
}