import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs/';

import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "http://localhost/api/php/";

  //vetor 
  vetor:Curso[]; 
    //<----------------------------------------------

  //Objeto da classe Curso
  curso = new Curso();

  //Construtor 
  constructor(private http: HttpClient) { }

  
  //Obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res) => {
        this.vetor = res['cursos'];  //<-------------------------------------
        return this.vetor;
      })
    )
    
    } 

}

//console.log(vetor);