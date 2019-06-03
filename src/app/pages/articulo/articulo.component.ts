import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import { ArticuloDescripcion } from '../../interfaces/articulo-descripcion.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {


  articulo: ArticuloDescripcion;
  id: string;
  constructor(private route: ActivatedRoute, public articuloService: ArticulosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.articuloService.getArticulo(parametros['id'])
      .subscribe( (articulo: ArticuloDescripcion) => {
        this.articulo = articulo;
        this.id = parametros['id'];
      });
    });
  }

}
