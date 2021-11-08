import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPacksComponent } from './investment-packs.component';

describe('InvestmentPacksComponent', () => {
  let component: InvestmentPacksComponent;
  let fixture: ComponentFixture<InvestmentPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
