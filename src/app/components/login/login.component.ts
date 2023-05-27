import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public isLogin=true;
  public submitted=false;

  constructor(private formBuilder: FormBuilder, private route: Router, private authService: AuthService) { }

  ngOnInit() {
    this.submitted=false;
    this.loginForm = this.formBuilder.group({
      team: ['', Validators.required],
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }

  loginUser() {
    this.submitted=true;
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => {
        // console.log(res.token);
        localStorage.setItem('token', res.token);
        // sessionStorage.setItem('token',res.token);
        this.route.navigate(['/home']);
      },
      err => { 
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.loginForm.reset({"team":''});
            this.submitted=false;
            this.isLogin=false;
          }
       }
      }
    );

  }

  Cancle() {

    this.route.navigate(['/'])
    // console.log("exit");
  }

  onKeypressEvent(event:KeyboardEvent){

    if(event.keyCode === 13)
    {
      console.log(event.keyCode);
     //this.formControls.loginForm;
    }

 
 }

}
