import { Component } from '@angular/core';
import { SideMenu } from '../../components/side-menu/side-menu';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenu,],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export default class DashboardPage { }
