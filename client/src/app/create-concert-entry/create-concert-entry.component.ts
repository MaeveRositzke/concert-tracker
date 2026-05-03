import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-concert-entry',
  imports: [ReactiveFormsModule],
  templateUrl: './create-concert-entry.component.html',
  styleUrl: './create-concert-entry.component.css'
})

export class CreateConcertEntryComponent {
  concertEntryForm = new FormGroup({
    headliner: new FormControl(''),
    support: new FormControl([]),
    date: new FormControl(''),
    setRatings: new FormControl([]),
    photos: new FormControl([]),
    venue: new FormControl(''),
    city: new FormControl(''),
    tour: new FormControl('')
  })
}