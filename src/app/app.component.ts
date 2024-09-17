import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'utilities15';

  headers = ['id', 'nombre', 'apellidos', 'fecha', 'total', 'acciones'];
  dataOfHeaders: data[]  = [
    {id: '1', name: 'Juan', lastName: 'Perez', date: '2021-01-01', total: '10000'},
    {id: '2', name: 'Maria', lastName: 'Gonzalez', date: '2021-01-02', total: '20000'},
    {id: '3', name: 'Pedro', lastName: 'Ramirez', date: '2021-01-03', total: '3000000'},
    {id: '4', name: 'Jose', lastName: 'Fernandez', date: '2021-01-04', total: '400'},
    {id: '5', name: 'Ana', lastName: 'Lopez', date: '2021-01-05', total: '500'},
  ]

  // dataSource = this.dataOfHeaders;
  displayedColumns: string[] = ['id', 'name', 'lastName', 'date', 'total', 'acciones'];

  show(data: any) {
    console.log(data);
  }
}

export interface data {
  id: string;
  name: string;
  lastName: string;
  date: string;
  total: string;
}