import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiserComponent } from './skiser.component';

describe('SkiserComponent', () => {
  let component: SkiserComponent;
  let fixture: ComponentFixture<SkiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
