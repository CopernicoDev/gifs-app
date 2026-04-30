import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Trending from '../trending/trending';
import Search from '../search/search';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, Trending, Search, SideMenu],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export default class DashboardPage { }
