import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usarios.model';



declare function init_plugins();


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  registro: FormGroup;

  constructor( public usuarioserv: UsuarioService,
               public router: Router) { }


               sonIguales(campo1: string, campo2: string) {
                 return (group: FormGroup) => {

                  const pass1 = group.controls[campo1].value;
                  const pass2 = group.controls[campo2].value;

                  if (pass1 === pass2) {
                    return null;
                  }

                  return {
                    sonIguales: true
                  };
                 };

               }

  ngOnInit(): void {

     init_plugins();


     this.registro = new FormGroup ({
      nombre: new FormControl (null, Validators.required),
       // apellidoP: new FormControl (null, Validators.required),
       // apellidoM:  new FormControl (null, Validators.required),
      email: new FormControl (null , [Validators.required, Validators.email]),
      password: new FormControl (null, Validators.required),
      password2: new FormControl (null, Validators.required),
      condiciones: new FormControl (false)
    }, {validators: this.sonIguales('password', 'password2') }  );
  }

  register(reg: Usuario) {

    if (this.registro.invalid) {
      return;
    }
    if (!this.registro.value.condiciones) {
      Swal.fire(' Aviso!!', 'debe aceptar las condiciones', 'warning');
      return;
    }


    reg  = new Usuario (
      this.registro.value.nombre,
      this.registro.value.email,
      this.registro.value.password,
    );
       this.usuarioserv.Register(reg)
       .subscribe( (res: any) => {
            console.log(res);

             this.router.navigate(['/login']);
      },(err:Error) => {  console.log (err)  })


    }


  }
