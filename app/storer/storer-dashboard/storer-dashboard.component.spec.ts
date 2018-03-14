import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorerDashboardComponent } from './storer-dashboard.component';

describe('StorerDashboardComponent', () => {
  let component: StorerDashboardComponent;
  let fixture: ComponentFixture<StorerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
