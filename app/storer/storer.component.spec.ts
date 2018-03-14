import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerComponent } from './storer.component';

describe('StorerComponent', () => {
  let component: StorerComponent;
  let fixture: ComponentFixture<StorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
