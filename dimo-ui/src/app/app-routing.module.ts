import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/components/dashboard.component';
import { LoginComponent } from "./containers/components/login.component";
import { SearchResultsComponent } from './containers/components/searchresults.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './containers/components/dashboard.component';
import {EntryPointComponent} from "./containers/components/entrypoint.component";

const routes: Routes = [
  {path: '', redirectTo: '/entrypoint', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'entrypoint', component: EntryPointComponent}
  { path: 'searchresults', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
