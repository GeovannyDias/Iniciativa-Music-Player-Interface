import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from 'src/app/core/config/endpoints';
import { getApiUrl } from 'src/app/core/services/api-url';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  postTrack(data: any) {
    const url = getApiUrl(ENDPOINTS.TRACK);
    return this.http.post(url, data);
  }

  getTracks() {
    const url = getApiUrl(ENDPOINTS.TRACK);
    return this.http.get<any[]>(url);
  }

  
}
