import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService, private counterService: CounterService){}
  
  
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  counter: number;

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counter = this.counterService.counter;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counter = this.counterService.counter;
  }
  
  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counter = this.counterService.counter;
  }
}
