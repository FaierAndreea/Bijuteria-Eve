import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hasError: boolean;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
    this.hasError = false;
  }

  createRegisterForm(){
    this.registerForm = new FormGroup ({
      displayName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
    this.userService.register(this.registerForm.value).subscribe(response =>{
      this.router.navigateByUrl('/shop');
    }, error => {
      console.log(error);
      this.hasError = true;
      this.errorMessage = error.error;
    });
  }

}
