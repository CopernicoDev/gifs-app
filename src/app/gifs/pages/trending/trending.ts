import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
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

  ScrollDivRef = viewChild<ElementRef<HTMLDivElement>>(' scrollContainer');

  onScroll(event: Event) {
    const ScrollDiv = this.ScrollDivRef()?.nativeElement;
    if (!ScrollDiv) return;
    const scrollTop = ScrollDiv.scrollTop;
    const clientHeight = ScrollDiv.clientHeight;
    const isAtBottom = scrollTop + clientHeight >= ScrollDiv.scrollHeight;

    if (isAtBottom) {

    }




  }
}
