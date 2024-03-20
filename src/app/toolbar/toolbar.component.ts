import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { MainService } from '../main.service';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIcon,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public static currentPage: string = "";

  route: ActivatedRoute = inject(ActivatedRoute);
  mainService: MainService = inject(MainService);

  file: any;
  dataUltimoCaricamento: string | null;
  sidenavOpened!: boolean;

  constructor() {
    if(localStorage.getItem("DataUltimoCaricamento") != null) 
      this.dataUltimoCaricamento = localStorage.getItem("DataUltimoCaricamento");
    else
      this.dataUltimoCaricamento = null;
  }

  get staticCurrentPage(): string {
    return ToolbarComponent.currentPage;
  }

  set currentPage(currentPage: string) {
    ToolbarComponent.currentPage = currentPage;
  }

  fileChanged(event: any) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = () => {
      localStorage.setItem("Dati", fileReader.result + "");
      localStorage.setItem("DataUltimoCaricamento", new Date().toLocaleDateString())
    }
    
    fileReader.readAsText(this.file);
  }
}