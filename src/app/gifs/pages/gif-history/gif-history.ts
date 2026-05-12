import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Services } from '../../services/services/services';
import { GifList } from '../../components/gifs-image/gif-list/gif-list';

@Component({
  selector: 'app-gif-history',
  imports: [GifList],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistory {
  gifService = inject(Services);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['query'])
    )

  )

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());

  })
}
