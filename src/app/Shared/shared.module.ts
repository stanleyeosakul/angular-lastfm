import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LastfmService } from './services/lastfm.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SearchComponent
  ],
  exports: [
    NavbarComponent,
    SearchComponent
  ],
  providers: [
    LastfmService
  ]
})
export class SharedModule { }
