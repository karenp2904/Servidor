export default interface UsuarioServicePort{
    validarLogin:(usuario:string, contraseña: string)=> Promise<boolean>;
    
}