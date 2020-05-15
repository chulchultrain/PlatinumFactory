import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFilterFormComponent } from './entry-filter-form.component';

describe('EntryFilterFormComponent', () => {
  let component: EntryFilterFormComponent;
  let fixture: ComponentFixture<EntryFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
