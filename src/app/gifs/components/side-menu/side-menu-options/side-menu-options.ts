import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Services } from '../../../services/services/services';

interface Option {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}


@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
  gifService = inject(Services)

  menuOptions: Option[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: 'trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Buscar',
      subLabel: 'Buscar Gifs',
      route: 'search',
      icon: 'fa-solid fa-search',
    }
  ]
}
