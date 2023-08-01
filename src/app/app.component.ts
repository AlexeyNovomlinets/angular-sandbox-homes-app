import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="./assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <router-outlet/>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule ],
})
export class AppComponent {
  // TODO: Deploy it to gh-pages
  title = signal('homes');
}
