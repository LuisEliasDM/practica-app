import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RickAndMortyRoutingModule
  ]
})
export class RickAndMortyModule { }
