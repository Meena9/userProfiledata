import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetails } from '../constants/appConstant';
import { AuthService } from '../service/auth.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
} )
export class LoginComponent implements OnInit {
  error: boolean = false;
  constructor ( private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService ) {

  }

  user: any = {};

  ngOnInit() {

  }


  onSubmit() {

    const isLogin = this.user.username === userDetails.username && this.user.password === userDetails.password
    if ( isLogin ) {

      this._authService.setuser( isLogin ? 'valid' : 'invalid' )
      this._router.navigate( ["home"] );

    } else {
      this.error = true
    }
  }

  ngOnDestroy() {
  }

}

