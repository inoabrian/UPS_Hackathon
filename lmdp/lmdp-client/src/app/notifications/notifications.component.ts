import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  notifications = [{
    title : 'Access Point',
    address : '500 Paramus Park',
    time : '10:30 AM',
    duration : '1 hour'
  }];

  ngOnInit() {
  }

}
