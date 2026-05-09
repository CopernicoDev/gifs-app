import { Component, inject } from '@angular/core';
import { GifList } from '../../components/gifs-image/gif-list/gif-list';
import { Services } from '../../services/services/services';

@Component({
  selector: 'app-search',
  imports: [GifList],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export default class Search {
  gifService = inject(Services)

  onSearch(query: string) {
    this.gifService.loadSearchGifs(query);


  }


}
