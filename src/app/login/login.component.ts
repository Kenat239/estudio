import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usarios.model';


declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logueo: FormGroup;


  constructor(  public usuarioService: UsuarioService,
                public router: Router) { }

  ngOnInit(): void {

    init_plugins();



    this.logueo = new FormGroup ({
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.minLength(4)]),
      remember: new FormControl (false)
    });
   }
  login(usuario: Usuario) {

    console.log(this.logueo.value);
    if (this.logueo.invalid) {
      return;
    }

       usuario = new Usuario (
        null,
         this.logueo.value.email,
         this.logueo.value.password,
          this.logueo.value.remember
          );

    this.usuarioService.login(usuario).subscribe( (Res: any) => {

      const data = Res.body;

      console.log(Res);

      this.usuarioService.guardaStorage(data.id, data.token, data.usuario, data.remember)


      this.router.navigate(['/dashboard']);
    }, (err: Error) => {
      console.log(err);
    });
  }


}
