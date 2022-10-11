import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/libs/helpers/storage.helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.apiService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        StorageHelper.setItem("session", response)
        this.router.navigate(['rickAndMorty'])
      }
    })
  }
}
