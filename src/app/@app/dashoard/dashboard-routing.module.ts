import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeedleStickInjuryComponent } from './needle-stick-injury/needle-stick-injury.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'needle-stick-injury', component: NeedleStickInjuryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
