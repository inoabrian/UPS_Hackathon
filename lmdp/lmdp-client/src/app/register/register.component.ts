import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public appTitle = 'The Last Mile Delivery System';

  constructor () { }

  ngOnInit() {
  }
}
