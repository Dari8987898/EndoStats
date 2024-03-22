import { Injectable } from '@angular/core';

import { GmTableInterface } from './interfaces/gm-table.interface';
import { GenericTableInterface } from './interfaces/generic-table.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dati: GenericTableInterface[] = [];

  constructor() {
    this.formatData();
  }
  
  public getTable(id: number): GenericTableInterface[] {
    switch(id) {
      case 1:
        return this.getGmTableData();

      case 2:
        return this.getAmbulatorioTableData();

      case 3:
        return this.getDaDecidereTableData();

      default:
        return [];
    }
  }

  public getDetail() {
    
  }

  private getGmTableData() {
    return this.dati;
  }

  private getAmbulatorioTableData() {
    return this.dati;
  }

  private getDaDecidereTableData() {
    return this.dati;
  }

  private formatData(): void {
    this.dati = [];

    let datiDaCsv: string | null = localStorage.getItem("Dati");

    if(datiDaCsv != null && datiDaCsv != "") {
      let righe: string[] = datiDaCsv.split("\n");
      let colonne: string[] = [];

      //rimuovo il primo elemento [0] perchè sono i nomi delle colonne e non mi interessano
      righe.shift();

      for (let i = 0; i < righe.length; i++) {
        colonne = righe[i].split(",");

        for (let j = 0; j < colonne.length; j++) {
          this.dati[i] = {
            id: i, //colonne[0],
            nome: colonne[1],
            cognome: colonne[2],
            data_ins: colonne[3],
            diagnosi: colonne[4]
          }
        }
      }

    } else {
      console.log("datiDaCsv == null");
    }
  }
}
