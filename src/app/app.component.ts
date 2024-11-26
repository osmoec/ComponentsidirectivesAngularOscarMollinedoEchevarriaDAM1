import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CorreuComponent} from './correu/correu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CorreuComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'correuprova';

  nCaractitol = this.title.length
}
