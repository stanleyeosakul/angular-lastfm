import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LastfmService {

  API_KEY = <your-lastFM-API-key-goes-here>;

  constructor(private http: HttpClient) { }

  search(artistName: string, queryType: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.API_KEY}&format=json`);
  }

}
