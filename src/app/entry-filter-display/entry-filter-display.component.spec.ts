import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFilterDisplayComponent } from './entry-filter-display.component';

describe('EntryFilterDisplayComponent', () => {
  let component: EntryFilterDisplayComponent;
  let fixture: ComponentFixture<EntryFilterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFilterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFilterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
