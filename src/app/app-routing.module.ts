import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ViewNuevasComponent} from "./pages/noticiasNuevas/view-nuevas/view-nuevas.component";
import {ViewFavoritasComponent} from "./pages/noticiasFavoritas/view-favoritas/view-favoritas.component";
import {LoginComponent} from "./pages/login/login.component";
import {ViewReservasComponent} from "./pages/reservas/view-reservas/view-reservas.component";
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'news', component: ViewNuevasComponent},
  {path: 'login', component:LoginComponent},
  {path: 'favorite', component: ViewFavoritasComponent},
  {path: 'reservas', component: ViewReservasComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
