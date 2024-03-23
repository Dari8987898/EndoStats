import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';

import { DaDecidereTableColumns, DaDecidereTableInterface } from '../../interfaces/da-decidere-table.interface';
import { GenericTableInterface } from '../../interfaces/generic-table.interface';
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
  displayedColumns: string[] = DaDecidereTableColumns;
  dataSource!: MatTableDataSource<GenericTableInterface>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service: MainService) {
    ToolbarComponent.staticTabIndex = 3;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<DaDecidereTableInterface>(this.service.getTable(this.idTabella));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}