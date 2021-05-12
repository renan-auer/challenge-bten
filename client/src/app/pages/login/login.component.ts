import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  isSubmitted: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { 
    this.formulario = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.setForm()
  }

  setForm() {
    this.isSubmitted = false;
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  login (form: any) {
    this.isSubmitted = true
    if (this.formulario.invalid)
      return

    this.loginService.login(form.name, form.password).subscribe(data => {
      this.router.navigate([''])
    }, error => {
      alert('Nome e/ou senha inválidos')
    })
  }

  get f() { return this.formulario.controls }
}
