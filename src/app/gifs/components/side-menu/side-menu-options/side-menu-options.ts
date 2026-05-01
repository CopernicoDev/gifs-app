import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

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

  menuOptions: Option[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Buscar',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-search',
    }
  ]
}
