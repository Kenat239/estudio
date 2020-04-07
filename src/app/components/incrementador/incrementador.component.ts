import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() porcentaje: number = 50;

  @Input('nombre') leyenda: string = 'leyenda';


  @Output('actualiza') cambioValor: EventEmitter <number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.leyenda);
    console.log('porcentaje', this.porcentaje);
  }

  ngOnInit(): void {
    // console.log('leyenda', this.leyenda);
    console.log('porcentaje', this.porcentaje);

  }


  onChange(valor: number) {
    // const elemHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress);

    if (valor >= 100) {
      this.porcentaje = 100;
    } else if (valor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = valor;
          }

    // elemHTML.value =  this.porcentaje;

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();

  }

  cambiaValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);
  }

}
