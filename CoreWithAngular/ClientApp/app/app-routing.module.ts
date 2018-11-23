import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: "", component: HeroesComponent },
  { path: 'heroes', component: HeroesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false // for Debuging of the Routes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
}

