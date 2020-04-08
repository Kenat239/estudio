import { Component, OnInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _AJUSTES: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarcolor(tema: string, link: ElementRef) {
    console.log( link);
    this.aplicarCheck(link);
    this._AJUSTES.aplicarTema(tema);
  }


  aplicarCheck(link: any ) {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema =  this._AJUSTES.ajustes.tema;
    for ( const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
       }
    }
  }
}
