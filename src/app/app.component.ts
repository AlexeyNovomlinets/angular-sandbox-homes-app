import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello Universe!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // TODO: Deploy it to gh-pages
  title = signal('homes');
}
