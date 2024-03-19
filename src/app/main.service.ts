import { Injectable } from '@angular/core';

import { Riga } from './interfaces/riga';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dati: Riga[];

  constructor() {
    this.dati = [];

    let datiDaCsv: string | null = localStorage.getItem("Dati");

    if(datiDaCsv != null) {
      let righe: string[] = datiDaCsv.split("\n");
      let colonne: string[] = [];

      //rimuovo il primo elemento [0] perchè sono i nomi delle colonne e non mi interessano
      righe.shift();

      for (let i = 0; i < righe.length; i++) {
        colonne = righe[i].split(",");

        for (let j = 0; j < colonne.length; j++) {
          this.dati[i] = {
            //colonne[0] non viene considerata poerché nell'excell ci scrivono quello che vogliono
            dataInserimento: colonne[1],
            email: colonne[2],
            nome: colonne[3],
            cognome: colonne[4],
            luogoDiNascita: colonne[5]
          }
        }
      }

    } else {
      console.log("datiDaCsv == null");
    }
  }
  
  getTabella(id: number): Riga[] {
    switch(id) {
      case 1:
        return this.dati;

      case 2:
        return [];

      case 3:
        return [];

      default:
        return [];
    }
  }
}
