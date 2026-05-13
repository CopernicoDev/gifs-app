import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import type { SearchResponse } from '../../interface/gifs-interface-api';
import { GifInterfaceObject } from '../../interface/gif-interface-object';
import { GifMapper } from '../../mapper/gif-mapper';
import { map, tap } from 'rxjs';

/*{
  'personake': [gif1, gif2, gif3, gif4, gif5],
    'animales': [gif6, gif7, gif8, gif9, gif10],
      'personas': [gif11, gif12, gif13, gif14, gif15]
} 

Record<string, Gif[]>*/

const LoadFromLocalStorageHistory = () => {
  if (typeof localStorage === 'undefined') return {};
  const history = localStorage.getItem('history');
  return history ? JSON.parse(history) : {};
}

@Injectable({
  providedIn: 'root'
})
export class Services {


  constructor() {
    this.loadGifs();
    const saveToLocalStorageHistory = effect(() => {
      localStorage.setItem('history', JSON.stringify(this.searchHistory()));
    })
  }

  // Inyectamos el HttpClient para hacer peticiones
  private http = inject(HttpClient);

  //Variable para guardar los gifs
  trendingGifs = signal<GifInterfaceObject[]>([])
  trindingGifsLoading = signal(true)

  searchHistory = signal<Record<string, GifInterfaceObject[]>>(LoadFromLocalStorageHistory());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));



  //private apiKey: string = 'TU_API_KEY_AQUI'; // <-- Pega tu API Key de Giphy aquí
  //private url: string = 'https://api.giphy.com/v1/gifs';
  // Variable para guardar los gifs que recibamos
  //public gifList: any[] = [];

  loadSearchGifs(query: string) {
    return this.http.get<SearchResponse>(`${environment.url}/search`,
      {
        params: {
          api_key: environment.apiKey,
          q: query,
          limit: 20
        }
      }
    ).pipe(
      map(({ data }) => data),
      map((items) => GifMapper.mapGifItemtoGifList(items)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLowerCase()]: items,
        }))
      })

    )

    /* forma tradicional de suscribirse pero en este caso se utiliza la forma moderna con .pipe()....subscribe((resp) => {
      const gifs = GifMapper.mapGifItemtoGifList(resp.data);
      this.searchGifs.set(gifs);
      this.searchGifsLoading.set(false);
    })*/
  }

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
      this.trindingGifsLoading.set(false);
      console.log(gifs)
    }
    );

  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }



}
