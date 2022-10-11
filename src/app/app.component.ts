import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelper } from './libs/helpers/storage.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica-app';

  constructor(private router: Router){

  }

  isAuthenticated(){
    return StorageHelper.getItem("session") === null
  }

  logout(){
    StorageHelper.logout()
    this.router.navigate(["/auth/login"])
  }
}
