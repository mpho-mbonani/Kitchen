import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitchen';
  loadedFeature!: string; //causes rerouting to home page after ingredient add

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
