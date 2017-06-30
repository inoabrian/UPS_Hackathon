import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor () { }

  public appTitle:string = "The Last Mile Delivery System";

  // @Input()
  // appTitle: string = "";

  ngOnInit() {
  }
}
