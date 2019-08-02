import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {

  categoria1 = 'Vuelo';
  categoria2 = 'Paquete';
  categoria3 = 'Hotel Trivago';

  precio1 = '1300';
  precio2 = '8040';
  precio3 = '5674';


  constructor() { }

  ngOnInit() {
  }

}
