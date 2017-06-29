import { Component } from '@angular/core';

export class Login{
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Last Mile Package Delivery';
  login: Login = {
    email: null,
    password: null
  };
} 
