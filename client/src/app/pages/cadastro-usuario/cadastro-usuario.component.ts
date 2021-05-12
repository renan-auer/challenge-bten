import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  formulario: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.formulario = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.setForm()
    this.route.params.subscribe((data: any)=> {
      if(data.id) {
        this.userService.getUserById(data.id).subscribe(user=> {
          this.setForm(user)
        })
      }
    })
  }

  setForm(data?: any) {
    this.isSubmitted = false;
    this.formulario = this.formBuilder.group({
      name: [data ? data.name : null, Validators.required],
      password: [data ? data.password : null, Validators.required],
      confPassword: [data ? data.confPassword : null, Validators.required],
      height: [data ? data.height : null, Validators.required],
      age: [data ? data.age : null, Validators.required],
    })

    if (data) {
      this.formulario.addControl('id', new FormControl(data.id, Validators.required));
    }
  }

  save(user: any) {
    this.isSubmitted = true
    if (this.formulario.invalid)
      return

    this.saveOrUpdate(user).subscribe(data => {
      this.router.navigate(['/users'])
    })
  }

  saveOrUpdate(user: any) {
    return user.id ? this.userService.update(user.id, user) : this.userService.save(user) 
  }

  get f() { return this.formulario.controls }

}
