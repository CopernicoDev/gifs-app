import { Component, input, Input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { GifInterfaceObject } from '../../../interface/gif-interface-object';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css',
})
export class GifList {
  gifList = input.required<GifInterfaceObject[]>();
}
