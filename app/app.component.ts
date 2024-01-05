import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExibeDeputadosComponent } from './exibe-deputados/exibe-deputados.component';
import { ExibePartidosComponent } from './exibe-partidos/exibe-partidos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ExibeDeputadosComponent,ExibePartidosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Deputados';
}
