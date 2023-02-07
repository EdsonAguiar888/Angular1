import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
import './curso.component.css';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //Vetor
  vetor: Curso[] = [];

  //Objeto da Classe Curso
  curso = new Curso();

  //Construtor
  constructor(private curso_servico:CursoService) {
   }

   //Inicializador
  ngOnInit(){
    //Ao iniciar o sistema, devera listar todos os cursos
    this.selecao();
  }

  //Selecao
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res:Curso[]) => {
        this.vetor = res;
      }
    )
  }


  cadastro(): void{
    alert("cadastrar");
  }

  //selecao() : void {
 //   alert("Seleção");
 // }

  alterar() : void {
    alert("alterar");
  }

  remover() : void{
    alert("Revover");
  }

  
}
