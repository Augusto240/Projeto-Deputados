import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CamaraService } from '../camara.service';
import { Partido } from '../partido';
@Component({
  selector: 'app-exibe-partidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-partidos.component.html',
  styleUrl: './exibe-partidos.component.css',
  providers: [CamaraService]
})
export class ExibePartidosComponent {
    partidos: Partido[] = []

    constructor(private par: CamaraService){
      this.par.obterPartidos().subscribe(resposta => {this.partidos = resposta.dados
      
      console.log(resposta.dados)})
    }
}
