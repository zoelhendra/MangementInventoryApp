import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTransferRequestComponent } from './create-new-transfer-request.component';

describe('CreateNewTransferRequestComponent', () => {
  let component: CreateNewTransferRequestComponent;
  let fixture: ComponentFixture<CreateNewTransferRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTransferRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
