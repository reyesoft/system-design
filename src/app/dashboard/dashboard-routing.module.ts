import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HideElementComponent } from './hide-element/hide-element.component';
import { GridWrapperComponent } from './grid-wrapper/grid-wrapper.component';
import { GridResponsiveComponent } from './grid-responsive/grid-responsive.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'hide-element',
        pathMatch: 'full'
      },
      {
        path: 'hide-element',
        component: HideElementComponent
      },
      {
        path: 'grid-wrapper',
        component: GridWrapperComponent
      },
      {
        path: 'grid-responsive',
        component: GridResponsiveComponent
      },
      {
        path: 'flex-layout',
        component: FlexLayoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
