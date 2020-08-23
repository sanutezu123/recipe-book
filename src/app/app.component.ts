import { Component, OnInit } from '@angular/core';
import { load } from '@angular/core/src/render3';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {} ;
  ngOnInit() {
    this.authService.autoLogin();
  }
}


