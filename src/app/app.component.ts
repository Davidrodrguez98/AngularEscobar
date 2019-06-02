import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ArticulosService } from './services/articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPaginaService: InfoPaginaService,
    public productosService: ArticulosService){

  }
}
