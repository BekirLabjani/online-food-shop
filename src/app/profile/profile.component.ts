import { Component, Injectable } from '@angular/core';
import { GeneralFunctionsService } from '../services/general-functions.service';
import { CommonModule } from '@angular/common';
import { DialogForUserComponent } from '../dialog-for-user/dialog-for-user.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
@Injectable({
  providedIn: 'root',
})

export class ProfileComponent {

 
  private dialogForUser: DialogForUserComponent | null = null;

  constructor(private service: GeneralFunctionsService){
  }

  showId(id: string){
    console.log(id);
    
  }


}
