import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<any> = []
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((data : any) => {
      this.users = data
    })
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(data => {
      this.getUsers()
    })
  }
}
