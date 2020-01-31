import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/components/dashboard.component';
import { EntryPointComponent } from './containers/components/entrypoint.component';
import { SearchResultsComponent } from './containers/components/searchresults.component';
import { AuthGuard } from './services/route-gaurd';
import {MovieDetailsComponent} from "./containers/components/moviedetails.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: EntryPointComponent },
  { path: 'searchresults', component: SearchResultsComponent, canActivate: [AuthGuard], },
  { path: 'moviedetails/:id', component: MovieDetailsComponent,canActivate: [AuthGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
