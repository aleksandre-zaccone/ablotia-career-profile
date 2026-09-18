import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profileLoaded = false;

  onProfileLoad(): void {
    this.profileLoaded = true;
  }
}
