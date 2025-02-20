import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-concert-entry',
  imports: [],
  templateUrl: './concert-entry.component.html',
  styleUrl: './concert-entry.component.css'
})
export class ConcertEntryComponent {
  @Input() user: string = '';
  @Input() date: string = '';
  @Input() artists: string[] = [];
  @Input() media: string[] = [];
  @Input() rating: string = '';
  @Input() description: string = '';
  @Input() venue: string = '';
  @Input() city: string = '';
  @Input() tour: string = '';
  @Input() comments: string = '';
  @Input() likes: number = 0;

  likeConcert() {
    this.likes++;
  }
}
