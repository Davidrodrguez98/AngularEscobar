import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { ArticuloDescripcion } from '../../interfaces/articulo-descripcion.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  articulo: ArticuloDescripcion;
  id: string;

  constructor( private route: ActivatedRoute, public articulosService: ArticulosService) { }

  ngOnInit() {
  }

}
