import { Component } from '@angular/core';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadFeature = 'recipe';
  title = 'First-App';

  loadPage(event) {
    this.loadFeature = event.page;
  }
}


