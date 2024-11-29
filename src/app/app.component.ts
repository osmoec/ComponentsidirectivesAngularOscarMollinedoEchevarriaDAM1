import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CorreuComponent} from './correu/correu.component';
import {LlistacorreusComponent} from './llistacorreus/llistacorreus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CorreuComponent, LlistacorreusComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'correuprova';

  nCaractitol: number

  nClics: number = 0

  constructor() {
    this.nCaractitol = this.title.length

  }

  clicat(){
    this.nCaractitol++
  }
  protected readonly onclick = onclick;

}
