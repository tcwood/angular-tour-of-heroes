import { Component } from '@angular/core';
// import appComponentStyles from './app.components.css'

@Component({
  selector: 'my-app',
  // moduleId: module.id,
  // Will work if use ==> /Users/traviswood/Desktop/angular-tour-of-heroes/src/app/app.component.css
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}

