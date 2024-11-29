import { Component } from '@angular/core';

@Component({
  selector: 'app-llistacorreus',
  imports: [],
  templateUrl: './llistacorreus.component.html',
  standalone: true,
  styleUrl: './llistacorreus.component.css'
})
export class LlistacorreusComponent {

  arrayCorreus = [{remitent: "Oscar Mollinedo Echevarria",destinatari:"Inspalamos",contingut:"hola bon dia",llegit:true},{remitent: "Inspalamos",destinatari:"Oscar Mollinedo Echevarria",contingut:"hola bon dia",llegit:false}]

  Numerollegits: number = 0

  Numeronollegits: number = 0

  constructor() {

    for (let i = 0; i < this.arrayCorreus.length; i++) {
      if (this.arrayCorreus[i].llegit == true){
        this.Numerollegits++
      }
      else{
        this.Numeronollegits++
      }
    }

  }

}
