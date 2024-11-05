import Cliente from "../../dominio/model/cliente/Cliente";
import NullCliente from "../../dominio/model/cliente/NullCliente";
import ClienteServicePort from "../../dominio/port/driver/serviceDriver/ClienteServicePort";
import ClienteUseCasePort from "../../dominio/port/driver/useCaseDriver/ClienteUseCasePort";

export default class ClienteUseCase implements ClienteUseCasePort{

    constructor(private readonly clienteService: ClienteServicePort) {}

    public obtenerClientePorCita = async (numeroCita: string): Promise<Cliente> => {
        try {
            const cliente = await this.clienteService.obtenerClientePorCita(numeroCita);
            return cliente;
        } catch (error) {
            console.error('Error en obtenerClientePorCita:', error);
            return new NullCliente(); // Devuelve una instancia de NullCliente en caso de error
        }
    }

    public verificarTipoClientePremium = async (cliente: Cliente): Promise<boolean> => {
        try {

            if(await this.verificarEdadPremiun){
                return true
            }
            return cliente.getTipoCliente() === 'premium';
        } catch (error) {
            console.error('Error en verificarTipoClientePremium:', error);
            return false;
        }
    }

    public verificarEdadPremiun = async (edad: number): Promise<boolean> => {
        try {
            return edad >= 60;
        } catch (error) {
            console.error('Error en verificarEdadPremium:', error);
            return false;
        }
    }

    public agregarCliente = async (cliente: Cliente): Promise<boolean> => {
        try {
            const resultado = await this.clienteService.agregarCliente(cliente);
            return resultado;
        } catch (error) {
            console.error('Error en agregarCliente:', error);
            return false;
        }
    }

    public modificarInformacionCliente = async (cliente: Cliente): Promise<boolean> => {
        try {
            const resultado = await this.clienteService.modificarInformacionCliente(cliente);
            return resultado;
        } catch (error) {
            console.error('Error en modificarInformacionCliente:', error);
            return false;
        }
    }
}