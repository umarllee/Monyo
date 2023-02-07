import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(){ }

  dataSource: any[] = [];

  ngOnInit(){

    this.dataSource = [
      {
        url: '../../../../assets/kuzu.png',
        restaurantName: 'Kuzu chef',
        distance: 2
      },
      {
        url: '../../../../assets/cafecity.jpg',
        restaurantName: 'Cafecity',
        distance: 1.3
      },
    ]

  }

}
