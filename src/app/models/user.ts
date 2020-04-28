export class User {
    
    constructor(
        public id: string,
        public email: string,
        public senha: string,
        public role: string,
        public projetos: any
    ) 
    {};
}