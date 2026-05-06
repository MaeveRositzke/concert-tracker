import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';
import { hasUncaughtExceptionCaptureCallback } from 'process';

@Pipe({
  name: 'formatDate',
})
export class FormatDate implements PipeTransform {
  transform(date: string): string {
    const [m, day, y] = date.split('/');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[+m - 1]} ${+day}, ${y}`;
  }
}

@Pipe({
  name: 'formatEntry',
})
export class FormatEntry implements PipeTransform {
  transform(entryNumber: number): string {
    if (String(entryNumber).length < 6) {
      return String(entryNumber).padStart(7, '0')
    }
    else {
      throw Error("max number of entries reached")
    }
  }
}

export interface ConcertEntry {
  headliner: string;
  support: string[];
  date: string;
  setRatings: string[];
  photos: string[];
  venue: string;
  city: string;
  tour: string;
  entryNumber: number;
}

@Component({
  selector: 'app-concert-entry',
  standalone: true,
  imports: [CommonModule, FormatDate, FormatEntry],
  templateUrl: './concert-entry.component.html',
  styleUrl: './concert-entry.component.css'
})
export class ConcertEntryComponent {
  protected concertEntry = httpResource<ConcertEntry>(() => ({
    url: '/api/concert-entry',
    headers: { 'Cache-Control': 'no-cache' }
  }));

  protected allActs = computed(() => {
    const e = this.concertEntry.value();
    return e ? [e.headliner, ...e.support] : [];
  });

  protected averageRating = computed(() => {
    const e = this.concertEntry.value();
    return e ? this.calcAverage(e.setRatings) : '';
  });

  ratingPercent(score: string): string {
    return `${(parseFloat(score) / 10) * 100}%`;
  }

  private calcAverage(ratings: string[]): string {
    const sum = ratings.map(Number).reduce((a, b) => a + b, 0);
    return (sum / ratings.length).toFixed(1);
  }
}