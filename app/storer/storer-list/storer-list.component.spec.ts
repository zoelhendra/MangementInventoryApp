import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerListComponent } from './storer-list.component';

describe('StorerListComponent', () => {
  let component: StorerListComponent;
  let fixture: ComponentFixture<StorerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
