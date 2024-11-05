export default class Cliente {
    
        private id: string;
        private nombre: string;
        private apellido: string;
        private edad: number;
        private direccion: string;
        private tipoCliente?: string;
    
        constructor(cliente: ClienteInterfaceAtributtes) {
            this.id = cliente.id;
            this.nombre = cliente.nombre;
            this.apellido = cliente.apellido;
            this.edad = cliente.edad;
            this.direccion = cliente.direccion;
            this.tipoCliente = cliente.tipoCliente || '';
        }

        public  isNull = (): boolean => {
            return false
        }
    
        public getFullName(): string {
            return `${this.nombre} ${this.apellido}`;
        }
    
        public getInfo(): string {
            return `ID: ${this.id}, Nombre: ${this.getFullName()}, Edad: ${this.edad}, Dirección: ${this.direccion}`;
        }

        public getId(): string {
            return this.id;
        }
        public setId(value: string): void {
            this.id = value;
        }
    
        public getNombre(): string {
            return this.nombre;
        }
        public setNombre(value: string): void {
            this.nombre = value;
        }
    
        public getApellido(): string {
            return this.apellido;
        }
        public setApellido(value: string): void {
            this.apellido = value;
        }
    
        public getEdad(): number {
            return this.edad;
        }
        public setEdad(value: number): void {
            this.edad = value;
        }
    
        public getDireccion(): string {
            return this.direccion;
        }
        public setDireccion(value: string): void {
            this.direccion = value;
        }
    
        public getTipoCliente(): string {
            return this.tipoCliente || '';
        }
        public setTipoCliente(value: string): void {
            this.tipoCliente = value;
        }
}


export interface ClienteInterfaceAtributtes{
    id:string,
    nombre:string,
    apellido:string,
    edad: number,
    direccion:string,
    tipoCliente?:string,

}