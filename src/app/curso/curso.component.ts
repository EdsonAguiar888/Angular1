import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //URL de conexão
  url = "http://localhost/api/php/";


  //Vetor de Cursos
    vetor?:Curso[];


  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
  }


  cadastro(): void{
    alert("cadastrar");
  }

  selecao() : void {
    alert("Seleção");
  }

  alterar() : void {
    alert("alterar");
  }

  remover() : void{
    alert("Revover");
  }

}
