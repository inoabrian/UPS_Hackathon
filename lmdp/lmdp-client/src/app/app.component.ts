import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('showing', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('hidden', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('showing => hidden', animate('400ms ease-in-out')),
      transition('hidden => showing', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'The Last Mile Delivery System';

  notificationsState: string = 'hidden';

  toggleNotifications() {
    this.notificationsState = this.notificationsState === 'hidden' ? 'showing' : 'hidden';
  }
} 
