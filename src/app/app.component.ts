import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConcertEntryComponent } from './concert-entry/concert-entry.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConcertEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concert-tracker';
}
