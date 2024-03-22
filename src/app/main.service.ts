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

    if(datiDaCsv != null && datiDaCsv != "") {
      let righe: string[] = datiDaCsv.split("\n");
      let colonne: string[] = [];

      //rimuovo il primo elemento [0] perchè sono i nomi delle colonne e non mi interessano
      righe.shift();

      for (let i = 0; i < righe.length; i++) {
        colonne = righe[i].split(",");

        for (let j = 0; j < colonne.length; j++) {
          this.dati[i] = {
            nRiga: i,
            disc: colonne[0],
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
  
  getTable(id: number): Riga[] {
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

  getDetail() {
    
  }
}
