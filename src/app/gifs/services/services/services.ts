import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import type { SearchResponse } from '../../../interface/gifs-interface-api';
import { GifInterfaceObject } from '../../../interface/gif-interface-object';
import { GifMapper } from '../../mapper/gif-mapper';

@Injectable({
  providedIn: 'root'
})
export class Services {


  constructor() {
    this.loadGifs
  }

  // Inyectamos el HttpClient para hacer peticiones
  private http = inject(HttpClient);

  //Variable para guardar los gifs
  trendingGifs = signal<GifInterfaceObject[]>([])

  //private apiKey: string = 'TU_API_KEY_AQUI'; // <-- Pega tu API Key de Giphy aquí
  //private url: string = 'https://api.giphy.com/v1/gifs';
  // Variable para guardar los gifs que recibamos
  //public gifList: any[] = [];

  loadGifs() {
    this.http.get<SearchResponse>(`${environment.url}/trending`,
      {
        params: {
          api_key: environment.apiKey
        }
      }
    ).subscribe((resp) => {
      const gifs = GifMapper.mapGifItemtoGifList(resp.data);
      this.trendingGifs.set(gifs);
      console.log(gifs)
    }
    );

  }

}
