import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistacorreusComponent } from './llistacorreus.component';

describe('LlistacorreusComponent', () => {
  let component: LlistacorreusComponent;
  let fixture: ComponentFixture<LlistacorreusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistacorreusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistacorreusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
