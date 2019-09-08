import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportFormComponent } from './reports/report-form/report-form.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent , children: [
  ]},
  {path: 'reports/new', component: ReportFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
