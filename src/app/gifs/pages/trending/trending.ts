import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifList } from '../../components/gifs-image/gif-list/gif-list';
import { Services } from '../../services/services/services';

const imageUrls: string[] = [
];

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export default class Trending {
  gifsUrls = signal(imageUrls);

  gifService = inject(Services)
}
