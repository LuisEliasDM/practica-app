import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: "rickAndMorty",
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./components/modules/rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)
  },
  {
    path: "**",
    redirectTo: "auth"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
