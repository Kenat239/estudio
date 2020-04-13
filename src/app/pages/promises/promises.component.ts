import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {


    this.contarHasta3().then(
      mensaje => console.log('termino!', mensaje))
      .catch(err =>
        console.log('error en la promesa', err));
  }

  ngOnInit(): void {
  }

  contarHasta3(): Promise<boolean> {

return new Promise ((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval( () => {

          contador += 1;

          console.log(contador);

          if ( contador === 3) {
            resolve(true);
            clearInterval (intervalo);
          }
        }, 1000 );

        });


  }

}
