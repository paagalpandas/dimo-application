import { Component } from '@angular/core';
import { SearchboxComponent } from '../app/containers/components/searchbox.component';
import { ProfileService } from './services/ProfileService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Dimo';

  color = 'primary';
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
