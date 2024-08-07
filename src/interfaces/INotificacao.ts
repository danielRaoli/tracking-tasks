export enum Tipo{
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotificacao{
    tipo: Tipo,
    message: string,
    titulo: string,
    id: number
}