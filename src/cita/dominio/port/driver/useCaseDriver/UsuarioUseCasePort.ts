
export default interface UsuarioUseCasePort{
    
    validarCredenciales:(usuario:string, contraseña:string) => Promise<boolean>;

}