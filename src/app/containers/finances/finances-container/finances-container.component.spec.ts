import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesContainerComponent } from './finances-container.component';

describe('FinancesContainerComponent', () => {
  let component: FinancesContainerComponent;
  let fixture: ComponentFixture<FinancesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
