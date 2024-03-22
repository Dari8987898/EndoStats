export interface GenericTableInterface {
    id: number;
    nome: string;
    cognome: string;
    data_ins: string;
    diagnosi: string;
}

export const GenericTableColumns: string[] = ['id', 'nome', 'cognome', 'data_ins', 'diagnosi'];