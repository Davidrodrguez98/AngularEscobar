import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [

  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'articulo/:id', component: ArticuloComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  // forRoot se usa para las rutas de la raiz de la app
  // para rutas hijas se usa forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
