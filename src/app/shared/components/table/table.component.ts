import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, MatSortModule, MatTableModule]
})
export class TableComponent implements OnInit {

  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() displayedColumns: string[] = [];

  @ContentChild('rows') rows!: TemplateRef<any> | null;
  @ContentChild('cellTemplate', { static: true }) cellTemplate!: TemplateRef<any>;

  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;

  sortedData!: any[];
  namesData: any[] = []

  // dataSource!: any[];

  constructor() {
  }

  ngOnInit(): void {
    // this.dataSource = this.data;
    console.log(this.dataSource);
    this.dataSource = new MatTableDataSource(this.data);
    // this.sortedData = this.data.slice();
    // this.namesData = Object.keys(this.data[0]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const sortActive = sort.active;
      console.log(sort);
      return compare(a[sortActive], b[sortActive], isAsc);
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}