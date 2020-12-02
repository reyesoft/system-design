import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSidenavModule } from "@angular/material/sidenav";
import { HideElementComponent } from './hide-element/hide-element.component';
import { MatListModule } from "@angular/material/list";
import { GridWrapperComponent } from './grid-wrapper/grid-wrapper.component';
import { GridResponsiveComponent } from './grid-responsive/grid-responsive.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';


@NgModule({
  declarations: [DashboardComponent, HideElementComponent, GridWrapperComponent, GridResponsiveComponent, FlexLayoutComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ]
})
export class DashboardModule { }
