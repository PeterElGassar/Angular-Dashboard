import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  SidebarComponent,
  TopbarComponent,
  FilterComponent
];


@NgModule({
  declarations: [
    ...COMPONENTS,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
