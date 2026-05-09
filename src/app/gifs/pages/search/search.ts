import { Component, inject, signal } from '@angular/core';
import { GifList } from '../../components/gifs-image/gif-list/gif-list';
import { Services } from '../../services/services/services';
import { GifInterfaceObject } from '../../interface/gif-interface-object';

@Component({
  selector: 'app-search',
  imports: [GifList],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export default class Search {
  gifService = inject(Services)
  searchGifs = signal<GifInterfaceObject[]>([]);

  onSearch(query: string) {
    this.gifService.loadSearchGifs(query).subscribe((resp) => {
      this.searchGifs.set(resp);
    })


  }


}
