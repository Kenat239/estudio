import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 20;
  porcentaje2: number = 50;
  constructor() { }

  ngOnInit(): void {
  }

/*actualizar(event: number) {
  console.log('evento', event);
  this.porcentaje1 = event;
}*/

}