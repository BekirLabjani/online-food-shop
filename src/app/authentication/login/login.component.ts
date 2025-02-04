import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from '../signup/signup.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private dialog: MatDialog,) {}
  readonly dialogRef = inject(MatDialogRef<LoginComponent>);

  goToSignUp() {

      this.dialogRef.close();
    
       const dialogRef = this.dialog.open(SignupComponent, {
          
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          if (result !== undefined) {
          }
        });
      }
  }

