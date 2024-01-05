import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Deputado } from '../deputado';
import { CamaraService } from '../camara.service';

@Component({
  selector: 'app-exibe-deputados',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './exibe-deputados.component.html',
  styleUrl: './exibe-deputados.component.css',
  providers: [CamaraService]
})
export class ExibeDeputadosComponent {

  deputados: Deputado[] = [];

  constructor(private dep: CamaraService){
    this.dep.obterTodosDeputados().subscribe(resposta => {this.deputados = resposta.dados 
    console.log(resposta.dados)})
  }
}
