import { Component, OnInit, ViewChild } from '@angular/core';
import { TrackModalComponent } from '../modals/track-modal/track-modal.component';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal!: TrackModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.modal.open({width: '15px', data: { name: 'geo', id: 1 } });
  }

}
