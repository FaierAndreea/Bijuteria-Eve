import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  hasError: boolean;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/cart';
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
      this.router.navigateByUrl(this.returnUrl);
    }, error => {
      console.log(error);
      this.hasError = true;
    });
  }

}
