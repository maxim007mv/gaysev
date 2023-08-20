import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoalComponent } from './loal.component';

describe('LoalComponent', () => {
  let component: LoalComponent;
  let fixture: ComponentFixture<LoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
