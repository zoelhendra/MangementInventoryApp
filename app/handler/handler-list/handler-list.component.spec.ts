import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerListComponent } from './handler-list.component';

describe('HandlerListComponent', () => {
  let component: HandlerListComponent;
  let fixture: ComponentFixture<HandlerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
