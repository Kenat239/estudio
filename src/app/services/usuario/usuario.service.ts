import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BACKEND } from '../../../environments/environment';
import { Usuario } from '../../models/usarios.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuario: Usuario;
  id: string;
  token: string;
  remember:any;

  constructor(
    public http: HttpClient,
    public router: Router
    ) {
      this.cargarStorage();
     }

    guardaStorage(id:string, token:string, usuario:Usuario, remember: any) {
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('email', remember)

        this.id = id;
        this.token = token;
        this.usuario = usuario;
        this.remember = this.usuario.email
    }

    cargarStorage() {
      if (localStorage.getItem('token') ) {
        this.token = localStorage.getItem ('token');
        this.id = localStorage.getItem ('id');
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.remember = true, localStorage.getItem('email')
      } else {
        this.token = '';
        this.id = '';
        this.usuario = null;
        this.remember = false
      }

    }


    estaLogueado() {
      return (this.token.length > 5) ? true : false
    }


    logout( ) {
      this.usuario = null;
      this.token = '';

      localStorage.removeItem('usuario');
      localStorage.removeItem('token');

      this.router.navigate(['/login']);
    }

    // =====================================
    // Login De Usuario
    // =====================================

    login(usuario: Usuario){
      const url = BACKEND + 'usuario/login';

      return this.http.post(url, usuario, {observe: 'response'} );
    }

    // =====================================
    // Registro De Usuario
    // =====================================

    Register(Reg: Usuario) {
      const url = BACKEND + 'usuario/';

      return this.http.post(url, Reg, {observe: 'response'} );
    }

}




