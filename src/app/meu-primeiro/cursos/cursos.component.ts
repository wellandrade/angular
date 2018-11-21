import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  cursos: String[] = ['Java', 'Angular', 'C#'];
  nomePortal: string;

  constructor() { 
    this.nomePortal = 'http://CursosAngular.com.br';
  }

  ngOnInit() {
  }
}
 