import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CorreuComponent} from './correu/correu.component';
import {LlistacorreusComponent} from './llistacorreus/llistacorreus.component';

// @ts-ignore
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

  constructor() {
    this.nCaractitol = comptar(this.title)


    }

  ngOnInit(): void {
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



