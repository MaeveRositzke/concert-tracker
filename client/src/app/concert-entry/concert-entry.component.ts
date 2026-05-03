import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';

export interface ConcertEntry {
  headliner: string;
  support: string[];
  date: string;
  setRatings: string[];
  photos: string[];
  venue: string;
  city: string;
  tour: string;
}

@Component({
  selector: 'app-concert-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concert-entry.component.html',
  styleUrl: './concert-entry.component.css'
})
export class ConcertEntryComponent {
  protected concertEntry = httpResource<ConcertEntry>('/api/concert-entry');

  // Derived signals — recompute automatically when concertEntry.value() changes
  protected allActs       = computed(() => {
    const e = this.concertEntry.value();
    return e ? [e.headliner, ...e.support] : [];
  });
  protected formattedDate = computed(() => {
    const e = this.concertEntry.value();
    return e ? this.formatDate(e.date) : '';
  });
  protected averageRating = computed(() => {
    const e = this.concertEntry.value();
    return e ? this.calcAverage(e.setRatings) : '';
  });

  ratingPercent(score: string): string {
    return `${(parseFloat(score) / 10) * 100}%`;
  }

  private formatDate(d: string): string {
    const [m, day, y] = d.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[+m - 1]} ${+day}, ${y}`;
  }

  private calcAverage(ratings: string[]): string {
    const sum = ratings.map(Number).reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  }
}