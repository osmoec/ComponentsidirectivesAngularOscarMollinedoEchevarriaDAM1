import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CorreuComponent} from './correu/correu.component';
import {LlistacorreusComponent} from './llistacorreus/llistacorreus.component';
// @ts-ignore
import {yellowSubmarine} from './funcions.js.ts';
// @ts-ignore
import {changeSize} from './funcions.js.ts';
// @ts-ignore
import {countWords} from './funcions.js.ts';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CorreuComponent, LlistacorreusComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'correuprova';

  nCaractitol: number

  nClics: number = 0

  urlTret: String = ""
  stringS: String = ""
  arrayProva = [{columna:1,textP:"hola1"},{columna:1,textP:"hola1"},{columna: 2,textP:"hola2"}]
  paraules :number = 0

  constructor() {

    this.nCaractitol = comptar(this.title)

    }

  ngOnInit(): void {
    var contingut = document.getElementById('paragraf');
    contingut!.innerHTML = 'bons dies'


  }

  clicat() {
    this.nCaractitol++
  }
  protected readonly onclick = onclick

}

  function comptar(numeroC: String){
    var numero: number = numeroC.length
    return numero
  }



