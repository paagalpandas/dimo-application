import { Component } from '@angular/core';
import { ProfileService } from './services/ProfileService';
// import { Mat } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Dimo';

  color = 'secondary';
  mode = 'indeterminate';

  public showHeader = false;
  public showLoader = false;

  constructor(private profileService: ProfileService) {
    this.profileService.isAuthenticated.subscribe(authenticated => {
      this.showHeader = authenticated;
    });

    this.profileService.showLoader.subscribe(show => {
      this.showLoader = show;
    });
  }
}
