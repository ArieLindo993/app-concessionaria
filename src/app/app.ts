import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteCadastrar } from './components/cliente/cliente-cadastrar/cliente-cadastrar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClienteCadastrar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('concessionaria');
}
