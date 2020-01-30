import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/components/dashboard.component';
import { EntryPointComponent } from './containers/components/entrypoint.component';
import { SearchResultsComponent } from './containers/components/searchresults.component';
import {MovieDetailsComponent} from "./containers/components/moviedetails.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: EntryPointComponent },
  { path: 'searchresults', component: SearchResultsComponent },
  { path: 'moviedetails/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
