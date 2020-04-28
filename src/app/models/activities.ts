export class Activity {
    
    constructor(
        public usuario: string,
        public nomeDemanda: string,
        public projeto: string,
        public tipoAtividade: string,
        public cliente: string,
        public dataAtividade: string,
        public minutosTrabalhados: number,
        public centroCusto: string,
        public descricaoAtividade: string
    ) 
    {};
}