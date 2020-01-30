import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './containers/components/dashboard.component';
import { LoginComponent } from "./containers/components/login.component";
import { EntryPointComponent } from "./containers/components/entrypoint.component";
import { SignUpComponent } from "./containers/components/signup.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchboxComponent } from '../app/containers/components/searchbox.component';
import { SearchResultsComponent } from "./containers/components/searchresults.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from "./containers/components/header.component";
import {MovieDetailsComponent} from "./containers/components/moviedetails.component";

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SearchboxComponent,
    SearchResultsComponent,
    EntryPointComponent,
    SignUpComponent,
    HeaderComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
