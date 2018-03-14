import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPickingComponent } from './request-picking.component';

describe('RequestPickingComponent', () => {
  let component: RequestPickingComponent;
  let fixture: ComponentFixture<RequestPickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
