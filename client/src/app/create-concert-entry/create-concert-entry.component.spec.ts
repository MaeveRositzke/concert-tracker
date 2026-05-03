import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConcertEntryComponent } from './create-concert-entry.component';

describe('CreateConcertEntryComponent', () => {
  let component: CreateConcertEntryComponent;
  let fixture: ComponentFixture<CreateConcertEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateConcertEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConcertEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
