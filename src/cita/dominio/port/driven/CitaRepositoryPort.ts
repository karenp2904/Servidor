import CitaDatabaseAtributtes from "../../types/CitaDatabaseAttributes";
import Repository from "../repository/RepositoryInterface";

export default interface CitaRepositoryPort extends Repository<string, CitaDatabaseAtributtes> {
}