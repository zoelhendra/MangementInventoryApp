import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDashboardComponent } from './receiver-dashboard.component';

describe('ReceiverDashboardComponent', () => {
  let component: ReceiverDashboardComponent;
  let fixture: ComponentFixture<ReceiverDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
