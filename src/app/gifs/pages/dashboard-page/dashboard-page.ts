import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Trending from '../trending/trending';
import Search from '../search/search';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, Trending, Search],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export default class DashboardPage { }
