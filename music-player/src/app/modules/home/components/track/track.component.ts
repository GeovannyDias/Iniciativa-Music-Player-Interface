import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  dataTracks: any[] = [];
  constructor(
    private trackService: TrackService,
  ) { }

  ngOnInit(): void {
    this.getTracks()
  }

  getTracks() {
    this.trackService.getTracks().subscribe(res => {
      this.dataTracks = res;
      console.log('this.dataTracks:', this.dataTracks);
    });
  }


}
