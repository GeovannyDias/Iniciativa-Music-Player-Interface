import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from 'src/app/core/config/endpoints';
import { getApiUrl } from 'src/app/core/services/api-url';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  getTracks() {
    const url = getApiUrl(ENDPOINTS.TRACK);
    return this.http.get<any[]>(url);
  }

  getTrackById(id: number) {
    const url = getApiUrl(ENDPOINTS.TRACK) + `/${id}`;
    return this.http.get(url);
  }

  postTrack(track: any) {
    const url = getApiUrl(ENDPOINTS.TRACK);
    return this.http.post(url, track);
  }

  updateTrackById(id: number, track: any) {
    const url = getApiUrl(ENDPOINTS.TRACK) + `/${id}`;
    return this.http.put(url, track);
  }

  deleteTrackById(id: number) {
    const url = getApiUrl(ENDPOINTS.TRACK) + `/${id}`;
    return this.http.delete(url);
  }




}
