import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';

import { Riga } from '../../interfaces/riga';
import { MainService } from '../../main.service';
import { ToolbarComponent } from '../../toolbar/toolbar.component';

@Component({
  selector: 'da-decidere-table',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './da-decidere-table.component.html',
  styleUrl: './da-decidere-table.component.scss'
})
export class DaDecidereTableComponent implements OnInit {
  readonly idTabella: number = 2;

  route: ActivatedRoute = inject(ActivatedRoute);
  displayedColumns: string[] = ['row', 'nome', 'cognome', 'email', 'dataInserimento', 'dataDiNascita'];
  dataSource!: MatTableDataSource<Riga>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service: MainService) {
    ToolbarComponent.staticCurrentPageIcon = "live_help";
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Riga>(this.service.getTabella(this.idTabella));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}