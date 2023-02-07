import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
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
