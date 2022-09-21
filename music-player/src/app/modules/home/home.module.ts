import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TrackComponent } from './components/track/track.component';
import { GenreComponent } from './components/genre/genre.component';
import { AlbumComponent } from './components/album/album.component';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsComponent } from './components/tabs/tabs.component';

const myComponents = [
  HomeComponent,
  TrackComponent,
  GenreComponent,
  AlbumComponent,
  BannerComponent,
  TabsComponent,
]

@NgModule({
  declarations: [
    myComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]

})
export class HomeModule { }
