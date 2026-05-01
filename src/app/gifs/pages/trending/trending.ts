import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifList } from '../../components/gifs-image/gif-list/gif-list';

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export default class Trending { }
