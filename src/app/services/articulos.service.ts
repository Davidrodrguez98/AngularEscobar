import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  cargando = true;
  articulos: Articulo[] = [];
  articulosFiltrado: Articulo[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( (resolve, reject) => {
        this.http.get('https://angular-escobar.firebaseio.com/articulos_idx.json')
      .subscribe((resp: Articulo[]) => {
        this.articulos = resp;
        this.cargando = false;
        resolve();
      });
    });

    

  }

  getArticulo(id: string){
    return this.http.get(`https://angular-escobar.firebaseio.com/articulos/${id}.json`)
  }

  buscarProducto(busqueda: string){
    //cargar productos
    if(this.articulos.length == 0){
      this.cargarProductos().then( () => {
        // se ejecuta despues de obtenere los productos
        this.filtrarProductos(busqueda);
      });
    }else{
      //aplicar el filtro
      this.filtrarProductos(busqueda);
    }

    // this.articulosFiltrado = this.articulos.filter( articulo => {
    //   return true;
    // } );
    // console.log(this.articulosFiltrado);
  }

  private filtrarProductos(busqueda: string){

    this.articulosFiltrado = [];
    busqueda=busqueda.toLowerCase();

    this.articulos.forEach( art => {
      const titulominusculas=art.titulo.toLowerCase();
      if(art.categoria.indexOf(busqueda)>=0 || titulominusculas.indexOf(busqueda) >=0){
        this.articulosFiltrado.push(art);
      }
    })
  }
}
