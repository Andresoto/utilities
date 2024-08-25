import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, MatSortModule]
})
export class TableComponent implements OnInit {

  @Input() headers: string[] = [];
  @Input() data: any[] = [];

  @ContentChild('rows') rows!: TemplateRef<any> | null;

  sortedData!: any[];
  namesData: any[] = []

  constructor() {
  }

  ngOnInit(): void {
    this.sortedData = this.data.slice();
    this.namesData = Object.keys(this.data[0]);
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