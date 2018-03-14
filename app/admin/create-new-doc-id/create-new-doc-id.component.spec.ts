import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDocIdComponent } from './create-new-doc-id.component';

describe('CreateNewDocIdComponent', () => {
  let component: CreateNewDocIdComponent;
  let fixture: ComponentFixture<CreateNewDocIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewDocIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewDocIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
