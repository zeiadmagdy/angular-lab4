import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
touched!:boolean ;
  
  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      Name: new FormControl ('', Validators.required),
      username: new FormControl ('', [Validators.required, Validators.pattern(/^\S+$/)]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    });
  }
  registerSender() {
console.log(this.registerForm);
this.touched = true;
if (this.registerForm.valid) {
  // this.touched = false;

  console.log("your form is valid");
}

  }

  methodForValidate(){
    return true;
  }

}
