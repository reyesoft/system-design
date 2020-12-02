import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public nav_list_items: Array<any> = [
    {
      url: '/hide-element',
      text: 'Ocultar elementos'
    },
    {
      url: '/grid-wrapper',
      text: 'Grid wrapper'
    },
    {
      url: '/grid-responsive',
      text: 'Grid responsive'
    },
    {
      url: '/flex-layout',
      text: 'Flex layout'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
