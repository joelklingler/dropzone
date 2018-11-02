import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueActionComponent } from './queue-action.component';

describe('QueueActionComponent', () => {
  let component: QueueActionComponent;
  let fixture: ComponentFixture<QueueActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
