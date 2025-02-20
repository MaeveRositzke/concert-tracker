import { Component } from '@angular/core';
import { ConcertEntryComponent } from './concert-entry/concert-entry.component';

@Component({
  selector: 'app-root',
  imports: [ConcertEntryComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})

export class AppComponent {
  title = 'concert-tracker';
}
