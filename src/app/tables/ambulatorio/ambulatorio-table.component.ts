import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';

import { AmbulatorioTableColumns, AmbulatorioTableInterface } from '../../interfaces/ambulatorio-table.interface';
import { GenericTableInterface } from '../../interfaces/generic-table.interface';
import { MainService } from '../../main.service';
import { ToolbarComponent } from '../../toolbar/toolbar.component';

@Component({
  selector: 'ambulatorio-table',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './ambulatorio-table.component.html',
  styleUrl: './ambulatorio-table.component.scss'
})
export class AmbulatorioTableComponent implements OnInit {
  readonly idTabella: number = 3;

  route: ActivatedRoute = inject(ActivatedRoute);
  displayedColumns: string[] = AmbulatorioTableColumns;
  dataSource!: MatTableDataSource<AmbulatorioTableInterface>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service: MainService) {
    ToolbarComponent.staticTabIndex = 2;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<AmbulatorioTableInterface>(this.service.getTable(this.idTabella));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}