import { CursosService } from './../../cursos/cursos.service';
import { CursoDetalheComponent } from './../../cursos/curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})

export class CursosModule { }
