import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportFormComponent } from './reports/report-form/report-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/reports/new', pathMatch: 'full'},
  {path: 'reports/new', component: ReportFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
