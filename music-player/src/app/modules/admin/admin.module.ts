import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AlbumComponent } from './components/album/album.component';
import { TrackComponent } from './components/track/track.component';
import { GenreComponent } from './components/genre/genre.component';
import { AdminComponent } from './components/admin/admin.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TrackModalComponent } from './components/modals/track-modal/track-modal.component';
import { GenreModalComponent } from './components/modals/genre-modal/genre-modal.component';
import { AlbumModalComponent } from './components/modals/album-modal/album-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlbumComponent,
    TrackComponent,
    GenreComponent,
    AdminComponent,
    TabsComponent,
    TrackModalComponent,
    GenreModalComponent,
    AlbumModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
