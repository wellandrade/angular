import { Component, OnInit, NgModule } from '@angular/core';

import { CursosService } from './../../cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  cursos: string[];
  nomePortal: string;

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://CursosAngular.com.br';
  
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }
}
 