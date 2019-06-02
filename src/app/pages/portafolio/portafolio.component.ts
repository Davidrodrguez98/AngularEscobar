import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public articulosService: ArticulosService) { }

  ngOnInit() {
  }

}
