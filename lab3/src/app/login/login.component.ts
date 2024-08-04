import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: any;
passwordModel: any;
passwordModelerrors: any;
Password: any;
emailModelerrors: any;
onSubmit(loginForm: any) {
  console.log(loginForm);

}

}
