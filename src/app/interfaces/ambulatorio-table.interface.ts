import { GenericTableColumns, GenericTableInterface } from "./generic-table.interface";

export interface AmbulatorioTableInterface extends GenericTableInterface {
    telefono: string;
}

export const AmbulatorioTableColumns = GenericTableColumns.concat(['telefono']);