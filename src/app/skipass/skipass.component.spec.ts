import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipassComponent } from './skipass.component';

describe('SkipassComponent', () => {
  let component: SkipassComponent;
  let fixture: ComponentFixture<SkipassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
