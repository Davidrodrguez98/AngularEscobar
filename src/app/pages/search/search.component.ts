import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public articuloService: ArticulosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articuloService.buscarProducto(params['busqueda']);
    });
  }

}
