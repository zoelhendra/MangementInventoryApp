import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpicDashboardComponent } from './ppic-dashboard.component';

describe('PpicDashboardComponent', () => {
  let component: PpicDashboardComponent;
  let fixture: ComponentFixture<PpicDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpicDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
