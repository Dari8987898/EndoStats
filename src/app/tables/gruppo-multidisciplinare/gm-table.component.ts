import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';

import { Riga } from '../../interfaces/riga';
import { MainService } from '../../main.service';
import { ToolbarComponent } from '../../toolbar/toolbar.component';

@Component({
  selector: 'gm-table',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './gm-table.component.html',
  styleUrl: './gm-table.component.scss'
})
export class GmTableComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  readonly idTabella: number = 1;
  displayedColumns: string[] = ['row', 'nome', 'cognome', 'email', 'dataInserimento', 'dataDiNascita'];
  dataSource!: MatTableDataSource<Riga>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service: MainService) {
    ToolbarComponent.currentPage = "Gruppi multidisciplinari";
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Riga>(this.service.getTabella(this.idTabella));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}