import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {

  users: any[] = [];

  private userService = inject(UserService);

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
