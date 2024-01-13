import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  selector: 'app-user-infopage',
  templateUrl: './userInfopage.component.html',
  styleUrls: ['./userInfopage.component.css'],

})
export class UserInfopageComponent implements OnInit {



  private usersServices = inject(UserService)
  public userId = signal(1)

  public currentUser = signal<User|undefined>(undefined)
  public userWasFound = signal(true)
  public fullName = computed(()=> {
    if(!this.currentUser()) return 'Usuario no encontrado'

    return `${this.currentUser()!.first_name} ${this.currentUser()?.last_name}`
  })


  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id: number){
    if(id<= 0)return;

    this.userId.set(id)
    this.currentUser.set(undefined)

    this.usersServices.getUserById(id)
    .subscribe({
      next:(value)=> {
        this.currentUser.set(value)
        this.userWasFound.set(true)
      },
      error:()=> {
        this.userWasFound.set(false)
        this.currentUser.set(undefined)
      }
      })

  }




}
