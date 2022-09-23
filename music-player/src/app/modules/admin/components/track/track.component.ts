import { Component, OnInit, ViewChild } from '@angular/core';
import { TrackService } from '../../services/track/track.service';
import { TrackModalComponent } from '../modals/track-modal/track-modal.component';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @ViewChild('modal', { static: false }) modal!: TrackModalComponent;
  trackList$: any[] = [];

  constructor(
    private trackService: TrackService,
  ) { }

  ngOnInit(): void {
    this.getTracks();
  }

  openModal() {
    this.modal.open({ width: '15px', data: { name: 'geo', id: 1 } });
  }

  closeModalEventListener(event: boolean) {
    console.log('Event:', event);
    this.getTracks();
  }

  getTracks() {
    this.trackService.getTracks().subscribe(res => {
      console.log('GET:', res);
      this.trackList$ = res;
    });
  }

}
