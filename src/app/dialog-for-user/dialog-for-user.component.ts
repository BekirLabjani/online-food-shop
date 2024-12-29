import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-for-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-for-user.component.html',
  styleUrl: './dialog-for-user.component.scss'
})
export class DialogForUserComponent {

  onSubmit(ngForm: NgForm){
    this.resetForm(ngForm);
  }

  resetForm(ngForm: NgForm) {
    // Setze die Formular-Daten zurück
    ngForm.resetForm();
  }

}
