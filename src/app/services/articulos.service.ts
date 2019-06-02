import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  cargando = true;
  articulos: Articulo[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-escobar.firebaseio.com/articulos_idx.json')
    .subscribe((resp: Articulo[]) => {
      console.log(resp);
      this.articulos = resp;
      this.cargando = false;
    });

  }
}
