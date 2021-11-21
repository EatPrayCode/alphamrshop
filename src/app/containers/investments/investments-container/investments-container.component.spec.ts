import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsContainerComponent } from './investments-container.component';

describe('InvestmentsContainerComponent', () => {
  let component: InvestmentsContainerComponent;
  let fixture: ComponentFixture<InvestmentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
