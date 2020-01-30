import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "dimo-header",
  templateUrl: '../views/header.component.html',
  styleUrls: ['../styles/scss/header.component.scss']
})

export class HeaderComponent {

  constructor(private router: Router) { }

  public goToDashboard() {
    this.router.navigateByUrl('dashboard');
  }
}

