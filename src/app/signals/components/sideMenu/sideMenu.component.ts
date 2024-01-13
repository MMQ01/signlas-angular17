import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css'],
})
export class SideMenuComponent {
  // public menuItems: MenuItem[] = [
  //   {
  //     title: 'Contador',
  //     router: 'counter'
  //   },
  //   {
  //     title: 'Usuario',
  //     router: 'user-info'
  //   },
  //   {
  //     title: 'Mutaciones',
  //     router: 'properties'
  //   },
  // ]

  public menuItems = signal<MenuItem[]>([{
    title: 'Contador',
    router: 'counter'
  },
  {
    title: 'Usuario',
    router: 'user-info'
  },
  {
    title: 'Mutaciones',
    router: 'properties'
  },]);

}
