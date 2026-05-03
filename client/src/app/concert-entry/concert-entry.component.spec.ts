import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertEntryComponent } from './concert-entry.component';

describe('ConcertEntryComponent', () => {
  let component: ConcertEntryComponent;
  let fixture: ComponentFixture<ConcertEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
