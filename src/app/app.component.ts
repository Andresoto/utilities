import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'utilities15';

  headers = ['id', 'nombre', 'apellidos', 'fecha', 'total'];
  dataOfHeaders:{id: string, name: string, lastName: string, date: string, total: string}[]  = [
    {id: '1', name: 'Juan', lastName: 'Perez', date: '2021-01-01', total: '100'},
    {id: '2', name: 'Maria', lastName: 'Gonzalez', date: '2021-01-02', total: '200'},
    {id: '3', name: 'Pedro', lastName: 'Ramirez', date: '2021-01-03', total: '300'},
    {id: '4', name: 'Jose', lastName: 'Fernandez', date: '2021-01-04', total: '400'},
    {id: '5', name: 'Ana', lastName: 'Lopez', date: '2021-01-05', total: '500'},
  ]
}
