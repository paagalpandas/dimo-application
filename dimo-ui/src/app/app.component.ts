import { Component } from '@angular/core';
import { SearchboxComponent } from '../app/containers/components/searchbox.component';
import { ProfileService} from './services/ProfileService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DimoUi';

  public showHeader = false;

  constructor(private profileService :  ProfileService){

//     this.profileService.isAuthenticated()
  }
}
