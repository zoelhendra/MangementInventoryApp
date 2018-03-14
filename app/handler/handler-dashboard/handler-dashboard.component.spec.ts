import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerDashboardComponent } from './handler-dashboard.component';

describe('HandlerDashboardComponent', () => {
  let component: HandlerDashboardComponent;
  let fixture: ComponentFixture<HandlerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
