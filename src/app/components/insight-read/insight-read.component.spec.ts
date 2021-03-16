import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightReadComponent } from './insight-read.component';

describe('InsightReadComponent', () => {
  let component: InsightReadComponent;
  let fixture: ComponentFixture<InsightReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
