import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasError: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.hasError = false;
  }

  createLoginForm(){
    this.loginForm = new FormGroup ({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(()=> {
      this.router.navigateByUrl('/shop');
    }, error => {
      console.log(error);
      this.hasError = true;
    });
  }

}
