import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formulario: FormGroup;
  isSubmitted: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
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
      confPassword: [null, Validators.required],
      height: [null, Validators.required],
      age: [null, Validators.required],
    })
  }

  save(user: any) {
    this.isSubmitted = true
    if (this.formulario.invalid)
      return

      this.userService.save(user).subscribe(data => {
      this.router.navigate(['/login'])
    })
  }

  get f() { return this.formulario.controls }
}
